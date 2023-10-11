import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import { IoHome } from 'react-icons/io5';

export const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">
          <IoHome />
        </NavLink>
      </li>
      <li>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </li>
    </ul>
  </nav>
);
