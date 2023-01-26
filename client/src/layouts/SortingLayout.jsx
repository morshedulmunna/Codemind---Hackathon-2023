import React from "react";
import MainSort from "../components/algorithm/sortingAlgoComponent/MainSort";
import MainLayout from "./MainLayout";

const SortingLayout = () => {
  return (
    <>
      <MainLayout>
        <div className="w-full h-[80vh] bg-blue-50">
          <MainSort />
        </div>
      </MainLayout>
    </>
  );
};

export default SortingLayout;
