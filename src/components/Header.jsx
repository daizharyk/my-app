import { Link } from "react-router-dom";
import styles from "../assets/styles/Header.module.css";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
          <li>
            <Link to="/">
              <span className={styles.number}>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <span className={styles.number}>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/crew">
              <span className={styles.number}>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="/technology">
              <span className={styles.number}>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
