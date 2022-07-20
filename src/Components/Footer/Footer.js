import React from "react";
import { NavLink } from "react-router-dom";
import FooterItem from "./FooterItem";
import "./Footer.css";
import imgFooter from "../../Images/Binance-Logo.wine.png";

const Footer = () => (
  <footer className="footer">
    <div className="footer-flex">
      <h4 className="">اطلاعات آنلاین فارسی</h4>
      <div className="footer-item">
        <ul className="footer-item">
          {FooterItem.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.url} className={item.cName}>
                  <span className="">
                    <i>{item.icon}</i>
                  </span>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="img-footer">
        <img src={imgFooter} alt=""></img>
      </div>
    </div>
  </footer>
);

export default Footer;
