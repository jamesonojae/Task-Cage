import React from 'react';
import SubHeader from './home/SubHeader';
import NavBar from "../Navbar/NavBar";
import {Routes} from "react-router-dom";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
      <div>
        <NavBar />
        <SubHeader />
        <Footer />
      </div>
  );
};

export default Home;
