import { Link, useLocation } from "react-router-dom";
import styles from "../assets/styles/Header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen) {
        const nav = document.querySelector(`.${styles.nav}`);
        const burger = document.querySelector(`.${styles.burger}`);

        if (
          nav &&
          !nav.contains(event.target) &&
          !burger.contains(event.target)
        ) {
          setMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/assets/shared/logo.svg" alt="Logo" />
      </div>
      <div className={styles.divider}></div>
      <button
        className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li className={location.pathname === "/" ? styles.active : ""}>
            <Link
              to="/"
              className={location.pathname === "/" ? styles.active : ""}
            >
              <span className={styles.number}>00</span> Home
            </Link>
          </li>
          <li
            className={
              location.pathname === "/destination" ? styles.active : ""
            }
          >
            <Link
              to="/destination"
              className={
                location.pathname === "/destination" ? styles.active : ""
              }
            >
              <span className={styles.number}>01</span> Destination
            </Link>
          </li>
          <li className={location.pathname === "/crew" ? styles.active : ""}>
            <Link
              to="/crew"
              className={location.pathname === "/crew" ? styles.active : ""}
            >
              <span className={styles.number}>02</span> Crew
            </Link>
          </li>
          <li
            className={location.pathname === "/technology" ? styles.active : ""}
          >
            <Link
              to="/technology"
              className={
                location.pathname === "/technology" ? styles.active : ""
              }
            >
              <span className={styles.number}>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
