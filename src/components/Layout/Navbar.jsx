import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.greeting}>
        <span>Hi Andrei,</span>
        <h2>Welcome to OnePulse!</h2>
      </div>

      <div className={styles.searchContainer}>
        <CiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
      </div>
    </nav>
  );
};

export default Navbar;
