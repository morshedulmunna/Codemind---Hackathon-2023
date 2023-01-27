import React from "react";
import MainLayout from "./MainLayout";
import Home from "../components/Home/Home";
import Navbar from "../components/core/Navbar";
import Footer from "../components/core/Footer";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default HomeLayout;
