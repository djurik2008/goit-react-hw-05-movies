import css from './mainMenu.module.css';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
  return (
    <nav>
      <ul className={css.menu}>
        <li>
          <NavLink className={css.menu__link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.menu__link} to="movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
