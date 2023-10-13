import { Suspense, useEffect, useState } from 'react';
import './Favorites.scss';
import { Link, Outlet } from 'react-router-dom';
import { Loader } from '../../components';
import { BsFillHeartbreakFill } from 'react-icons/bs';

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
      {favoriteCars.length ? (
        <ul>
          {favoriteCars?.map(car => (
            <li key={car.id}>
              <Link to="info" onClick={() => choose(car)}>
                {car.make}
                <span> {car.model}</span>
                {' - '}
                {car.rentalPrice}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="favorites__empty">
          <BsFillHeartbreakFill size={100} />
          <h3>Sorry, but you haven't added any cars</h3>
        </div>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};
