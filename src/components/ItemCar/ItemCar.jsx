import { useState } from 'react';
import { Overlay } from '../';
import './ItemCar.scss';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

const capImg =
  'https://media.colomio.com/t/500x500/vehicles/car/simple-sports-car.png';
const capDes = 'car';

export const ItemCar = ({ car, favoriteCars, setFavoriteCars }) => {
  const {
    img,
    year,
    make,
    model,
    type,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
    functionalities,
    isFavorite,
  } = car;

  const [isOpen, setIsOpen] = useState(false);

  const addFavoriteCar = async car => {
    car.isFavorite = true;
    setFavoriteCars([...favoriteCars, car]);
  };

  const deleteFavoriteCar = car => {
    car.isFavorite = false;
    setFavoriteCars(favoriteCars.filter(({ id }) => id !== car.id));
  };

  const foundCityAndCountry = address.split(',').splice(1, 2).join(' |');

  return (
    <>
      <li className="item-car">
        <div className="item-car__img-box">
          <img src={img ?? capImg} alt={`${make} ${model}` ?? capDes} />
          {!isFavorite ? (
            <button type="button" onClick={() => addFavoriteCar(car)}>
              <MdOutlineFavoriteBorder
                size={18}
                className="item-car__favorite-empty"
              />
            </button>
          ) : (
            <button type="button" onClick={() => deleteFavoriteCar(car)}>
              <MdOutlineFavorite
                size={18}
                className="item-car__favorite-filled"
              />
            </button>
          )}
        </div>
        <div className="item-car__info-box">
          <h3>
            <span>
              {make}
              <span>{` ${model}`}</span>, {year}
            </span>
            <span>{rentalPrice}</span>
          </h3>
          <p>
            {foundCityAndCountry} | {rentalCompany}
          </p>
          <p>
            {type} | {mileage} | {functionalities[0]}
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
