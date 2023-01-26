import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className=" flex justify-start items-center bg-gray-800 text-white px-12 space-x-6 text-lg h-[50px]">
        <p>Sorting Visualizer</p>

        <Link to="/sorting">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
