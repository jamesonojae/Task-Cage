import React from 'react';
import {NavLink} from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
      <div className="Footer">
        <div className="nav-logo">
          <span className=""><img src="/assets/images/logo-cenam2.png"  alt=''/></span>

        </div>


        <p className="footer"> © CopyRight 2022 Coinmena</p>




      </div>
  );
};

export default Footer;