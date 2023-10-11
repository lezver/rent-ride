import './ListCars.scss';
import { ItemCar } from '../';
import { useEffect, useState } from 'react';

export const ListCars = ({ cars }) => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const localFavoriteCars = localStorage.getItem('favoriteCars');
    if (localFavoriteCars) {
      setFavoriteCars(JSON.parse(localFavoriteCars));
    } else {
      localStorage.setItem('favoriteCars', JSON.stringify(favoriteCars));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteCars', JSON.stringify(favoriteCars));
  }, [favoriteCars]);

  return (
    <ul className="list-cars">
      {cars?.map(car => (
        <ItemCar
          car={car}
          key={car.id}
          favoriteCars={favoriteCars}
          setFavoriteCars={setFavoriteCars}
        />
      ))}
    </ul>
  );
};
