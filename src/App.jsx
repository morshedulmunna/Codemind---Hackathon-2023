import React from "react";
import { Route, Routes } from "react-router-dom";
import SortingLayout from "./layouts/SortingLayout.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/sorting" element={<SortingLayout />} />
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </>
  );
};

export default App;
