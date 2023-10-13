import './ListCars.scss';
import { ItemCar } from '../';

export const ListCars = ({ cars }) => (
  <ul className="list-cars">
    {cars?.map(car => (
      <ItemCar car={car} key={car.id} />
    ))}
  </ul>
);
