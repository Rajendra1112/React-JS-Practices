import React from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  // to know what is styles that we import from module.css
  console.log(typeof styles);
  console.log(styles);
  return (
    <div className="container">
      {/* here first we import the styles object then we access the key of that object as we have the keys as the class name which we defined in the module css*/}
      <nav className={styles.nav_bar}>
        <div className="logo">
          <img src="../images/Logo.png" alt="logo image" />
        </div>
        <ul>
          {/* to access className of module css */}
          {/* here navItem is the class name that is defined in Navbar.module.css file */}
          <li className={styles.nav_item}>
            <a href="#">home</a>
          </li>
          <li className={styles.nav_item}>
            <a href="#">about</a>
          </li>
          <li className={styles.nav_item}>
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
