import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menuItems from "../Navigation/MenuItems";
import { FaAtlassian } from "react-icons/fa";
import "./Navigation.css";

const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header>
      <nav className="navbar">
        <span className="navbar-logo">
          <i>{<FaAtlassian />}</i>
        </span>
        <h1 className="navbar-logo">اطلاعات آنلاین فارسی</h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={active ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.url} className={item.cName}>
                  <span className="ccc">
                    <i>{item.icon}</i>
                  </span>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
