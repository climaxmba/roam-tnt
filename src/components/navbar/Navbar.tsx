import { useState } from "react";
import { NavLink } from "react-router-dom";

import { paths } from "../../_lib/constants";

import styles from "./navbar.module.scss";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => setMenuOpen((val) => !val);

  return (
    <>
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
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className={styles.mobileContainer}>
        <span>Logo</span>
        <button
          title="Menu"
          className={`${styles.menu} ${menuOpen && styles.menuOpen}`}
          onClick={handleMenuClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`${styles.links} ${menuOpen && styles.linksOpen}`}>
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
        </ul>
      </nav>
    </>
  );
}
