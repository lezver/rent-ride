import { useState, useEffect } from 'react';
import { Overlay } from '../';
import './ItemCar.scss';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import capCar from '../../images/cap-car.jpg';

export const ItemCar = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const localFavoriteCars = localStorage.getItem('favoriteCars');

    if (localFavoriteCars)
      JSON.parse(localFavoriteCars).find(({ id }) =>
        id === car.id ? setIsFavorite(true) : ''
      );
  }, [car]);

  const heartSwitch = () => {
    const localFavoriteCars = localStorage.getItem('favoriteCars')
      ? JSON.parse(localStorage.getItem('favoriteCars'))
      : [];

    const checkCar = localFavoriteCars.find(({ id }) => id === car.id);

    if (checkCar) {
      const removeLoaclFavoriteCars = localFavoriteCars.filter(
        ({ id }) => id !== car.id
      );

      setIsFavorite(false);

      localStorage.setItem(
        'favoriteCars',
        JSON.stringify(removeLoaclFavoriteCars)
      );
    } else {
      localFavoriteCars.push(car);

      setIsFavorite(true);

      localStorage.setItem('favoriteCars', JSON.stringify(localFavoriteCars));
    }
  };

  const foundCityAndCountry = () =>
    car?.address.split(',').splice(1, 2).join(' |');

  return (
    <>
      <li className="item-car">
        <div className="item-car__img-box">
          <img src={car?.img ?? capCar} alt={`${car?.make} ${car?.model}`} />
          <button type="button" onClick={heartSwitch}>
            {!isFavorite ? (
              <MdOutlineFavoriteBorder
                size={38}
                className="item-car__favorite-empty"
              />
            ) : (
              <MdOutlineFavorite
                size={38}
                className="item-car__favorite-filled"
              />
            )}
          </button>
        </div>

        <div className="item-car__info-box">
          <h3>
            <span>
              {car?.make}
              <span>{` ${car?.model}`}</span>, {car?.year}
            </span>
            <span>{car?.rentalPrice}</span>
          </h3>
          <p>
            {foundCityAndCountry()} | {car?.rentalCompany}
          </p>
          <p>
            {car?.type} | {car?.mileage} | {car?.functionalities[0]}
          </p>
        </div>

        <button type="button" onClick={() => setIsOpen(true)}>
          Learn more
        </button>
      </li>
      {isOpen && <Overlay isOpen={setIsOpen} car={car} />}
    </>
  );
};
