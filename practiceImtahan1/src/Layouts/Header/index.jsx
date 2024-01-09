import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <div className="logo">
        <h1>MyShop</h1>
      </div>
      <div className="navBtns">
        <ul>
          <NavLink to={"/"} className={true ? "openedNavLink" : "pendingNavLink"}>
            <li>Homepage</li>
          </NavLink>
          <NavLink to={"/Basketpage"} className={true ? "openedNavLink" : "pendingNavLink"}>
            <li>Basket</li>
          </NavLink>
          <NavLink className={true ? "openedNavLink" : "pendingNavLink"}>
            <li>Add new products</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}

export default Header;
