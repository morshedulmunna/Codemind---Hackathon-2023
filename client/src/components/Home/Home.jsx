import React from "react";
import header from "../../assets/1556697933392.gif";
import { SlArrowDown } from "react-icons/sl";

const Home = () => {
  return (
    <div>
      <div className=" w-full relative">
        <img className="w-full  h-[100vh]" src={header} alt="" />

        <div className=" absolute top-[25%] translate-x-[50%] text-center right-[50%]  ">
          <h1 className=" text-[40px] lg:text-[70px] w-full  font-bold text-white">
            CODE MIND SOLUTION
          </h1>
          <p className="mb-[110px]">
            Algorithm visualizations are graphical representations of the steps
            and processes involved in a particular algorithm. They can take many
            forms, such as flowcharts, state diagrams, or animations etc.
          </p>

          <div className="flex animate-bounce  justify-center items-center">
            <SlArrowDown size={50} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
