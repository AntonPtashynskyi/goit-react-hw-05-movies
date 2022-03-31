import { NavLink } from 'react-router-dom';

import '../../index.css';

const NavigationPages = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'container-child active' : 'container-child'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? 'container-child active' : 'container-child'
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export { NavigationPages };
