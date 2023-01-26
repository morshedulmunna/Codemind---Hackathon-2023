import React from "react";
import send from "../../assets/send.svg";
import Input from "../core/Input";

import { RiSendPlane2Fill } from "react-icons/ri";

const Assistance = () => {
  return (
    <div>
      <div className="text-black ">{/* Chat Container */}</div>
      <div className=" absolute bottom-0 w-full">
        <form className=" relative flex">
          <Input />
          <button className=" absolute right-0" type="submit">
            <RiSendPlane2Fill />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Assistance;
