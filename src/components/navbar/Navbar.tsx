import { NavLink } from "react-router-dom";

import { paths } from "../../_lib/constants";

import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <span>Roam T&T</span>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            to={paths.root}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            to={paths.packages}
          >
            Packages
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            to={paths.favourites}
          >
            Favourites
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            to={paths.login}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
