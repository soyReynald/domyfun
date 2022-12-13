import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/elements">Elements</Link>
        </li>
        <li>
          <Link to="/homeone">HomeOne</Link>
        </li>
        <li>
          <Link to="/hometwo">HomeTwo</Link>
        </li>
        <li>
          <Link to="/homethree">HomeThree</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
        <li>
          <Link to="/accommodationstandard">AccommodationStandard</Link>
        </li>
        <li>
          <Link to="/accommodationsideinfo">AccommodationSideInfo</Link>
        </li>
        <li>
          <Link to="/accommodationslider">AccommodationSlider</Link>
        </li>
        <li>
          <Link to="/accommodationdetails">AccommodationDetails</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/blogstandard">BlogStandard</Link>
        </li>
        <li>
          <Link to="/blogdetails">BlogDetails</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contactus">ContactUs</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
