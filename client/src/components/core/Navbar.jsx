import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className=" flex justify-start items-center bg-gray-800 text-white px-12 space-x-6  h-[50px]">
        <Link to="/">
          <p>Sorting Visualizer ||</p>
        </Link>
        <Link to="/sorting">
          <button>Sorting</button>
        </Link>
        <Link to="/pathfinder">
          <button>Pathfinder</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
