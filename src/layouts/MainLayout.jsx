import React from "react";
import Navbar from "../components/core/Navbar";
import Footer from "../components/core/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
