import React from "react";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
     <ul>
      <li>Home</li>
      <li>News</li>
      <li>Contact</li>
      <li>About</li>
     </ul>
   </nav>
  );
};

export default Navbar;