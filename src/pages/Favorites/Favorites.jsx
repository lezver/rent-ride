import { Suspense, useEffect, useState } from 'react';
import './Favorites.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { BsFillHeartbreakFill } from 'react-icons/bs';

export const Favorites = ({ choose }) => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const localFavoriteCars = localStorage.getItem('favoriteCars');

    if (localFavoriteCars) {
      setFavoriteCars(JSON.parse(localFavoriteCars));
    }
    // eslint-disable-next-line
  }, []);

  const removeFavoriteCar = ({ id }) => {
    const newArr = setFavoriteCars(favoriteCars.filter(item => item.id !== id));
    choose(null);

    return newArr
      ? localStorage.setItem('favoriteCars', JSON.stringify(newArr))
      : localStorage.setItem('favoriteCars', JSON.stringify([]));
  };

  return (
    <section className="favorites">
      <h2>Favorites</h2>
      {favoriteCars.length ? (
        <>
          <ul>
            {favoriteCars?.map(car => (
              <li key={car.id}>
                <NavLink to="info" onClick={() => choose(car)}>
                  {car.make}
                  <span> {car.model}</span>
                  {' - '}
                  {car.rentalPrice}
                </NavLink>
                <button
                  className="favorites__remove-favorite-car"
                  onClick={() => removeFavoriteCar(car)}
                >
                  <BsFillHeartbreakFill size={32} />
                </button>
              </li>
            ))}
          </ul>
          <Suspense>
            <Outlet />
          </Suspense>
        </>
      ) : (
        <div className="favorites__empty">
          <BsFillHeartbreakFill size={100} />
          <h3>Sorry, but you haven't added any cars</h3>
        </div>
      )}
    </section>
  );
};
