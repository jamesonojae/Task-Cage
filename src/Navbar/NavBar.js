import React, {useState} from 'react';
import './Navbar.css';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <div className="Navbar">
        <div className="nav-logo d-flex">
          <span className="">DevLHB</span>
          {/*<span className="littleStyle">power by</span>*/}
        </div>
        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/service">Service</a>
          <a href="/contact">Contact</a>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="bar">

          </div>
        </div>
      </div>
  );
};

export default NavBar;
