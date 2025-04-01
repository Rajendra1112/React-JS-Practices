import React from "react";

function NavigationBar() {
  return (
    <nav className="container">
      <div className="logo">
        <img src="../images/brand_logo.png" alt="logo" />
      </div>

      <ul>
        <li href="#">menu</li>
        <li href="#">location</li>
        <li href="#">about</li>
        <li href="#">contact</li>
      </ul>

      <button>login</button>
    </nav>
  );
}

export default NavigationBar;
