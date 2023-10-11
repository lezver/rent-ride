import { Suspense, useEffect, useState } from 'react';
import './Favorites.scss';
import { NavLink, Outlet } from 'react-router-dom';

export const Favorites = ({ choose }) => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const localFavoriteCars = localStorage.getItem('favoriteCars');
    if (localFavoriteCars) {
      setFavoriteCars(JSON.parse(localFavoriteCars));
    }
  }, []);

  return (
    <section className="favorites">
      <h2>Favorites</h2>
      <ul>
        {favoriteCars?.map(car => (
          <li key={car.id}>
            <NavLink to="info" onClick={() => choose(car)}>
              {car.make}
              <span> {car.model}</span>
              {' - '}
              {car.rentalPrice}
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};
