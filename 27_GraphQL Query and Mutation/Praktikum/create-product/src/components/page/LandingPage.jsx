import React from "react";
import Content from "../content/Content";
import Footer from "../footer/Footer";
import HeaderLandingPage from "../header/HeaderLandingPage";
import Jumbotron from "../jumbotron/Jumbotron";
import "./Landing.css";
import { useEffect } from "react";
import ProductList from "../productlist/ProductList";

const LandingPage = () => {
  // useEffect(() => {
  //   alert("Welcome");
  // }, []);
  return (
    <div>
      <HeaderLandingPage />
      <Jumbotron />
      <ProductList />
      <Content />
      <Footer />
    </div>
  );
};

export default LandingPage;
