import React from 'react';
import NavBar from "../Navbar/NavBar";
import TradeContent from "./Trade/TradeContent";
import {Routes} from "react-router-dom";
import Footer from "../Footer/Footer";

const Trade = () => {
  return (
      <div>
        <NavBar />
        <TradeContent />
        <Footer />
      </div>
  );
};

export default Trade;