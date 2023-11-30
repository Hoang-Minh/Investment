import React from "react";
import imgSrc from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <div id="header">
      <img src={imgSrc} alt="investment-logo" />
      <h1>Investment Calculator</h1>
    </div>
  );
}

export default Header;
