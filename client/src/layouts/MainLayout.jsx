import React, { useState } from "react";
import Navbar from "../components/core/Navbar";
import Footer from "../components/core/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Askme from "../components/Askme/Askme";

const MainLayout = ({ children }) => {
  const [showAssistance, setAssistance] = useState(true);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setAssistance(false);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className=" h-[80vh] grid grid-cols-12">
        <div className="col-span-9">{children}</div>
        {/* Assistance */}
        {showAssistance && (
          <div className="col-span-3 bg-blue-100 relative border-l-[1px] border-gray-400">
            <Askme />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
