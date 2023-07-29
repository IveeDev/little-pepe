import React from "react";
import "./NavBar.scss";

import pepe from "../../assets/img/pepe.png";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="container">
        <img src={pepe} alt="pepe" />
        <button className="nav__btn">Connect Wallet</button>
      </div>
    </div>
  );
};

export default NavBar;
