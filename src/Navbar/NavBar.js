import React, {useState} from 'react';
import './Navbar.css';
import {  NavLink } from 'react-router-dom';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <div className="Navbar">
        <div className="nav-logo">
          <span className=""><img src="/assets/images/logo-cenam2.png"  alt=''/></span>
          {/*<span className="littleStyle">power by</span>*/}
        </div>
        <div className={`nav-items ${isOpen && "open"}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/trade">Trade</NavLink>
          <a ><span className="loginBtn"  data-toggle="modal" data-target="#myModal">Login</span></a>
        </div>

        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="bar">

          </div>
        </div>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">


              <div className="modal-header">
                <h4 className="modal-title">Modal Heading</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body">
                Modal body..
              </div>


              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>
      </div>
  );
};

export default NavBar;
