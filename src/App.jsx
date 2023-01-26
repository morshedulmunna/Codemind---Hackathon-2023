import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/sorting" element={<HomeLayout />} />
      </Routes>
    </>
  );
};

export default App;
