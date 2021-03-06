import React from "react";
import { NavLink } from "react-router-dom";
import FooterItem from "./FooterItem";
import "./Footer.css";
import imgFooter from "../../Images/Binance-Logo.wine.png";
import imgCoinbace from "../../Images/Coinbase-logo.png";
const Footer = () => (
  <footer className="footer">
    <div className="footer-flex">
      <h4 className="">اطلاعات آنلاین ارزدیجیتال</h4>
      <div className="footer-item">
        <ul className="footer-item">
          {FooterItem.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.url} className={item.cName}>
                  <span className="social-list">
                    <i>{item.icon}</i>
                  </span>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="img-footer-box">
        <div className="img-footer">
          <img src={imgFooter} alt=""></img>
        </div>
        <div className="img-footer">
          <img src={imgCoinbace} alt=""></img>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
