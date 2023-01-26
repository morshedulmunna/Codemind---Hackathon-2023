import React from "react";

const Loader = ({ element }) => {
  let elementText = "";

  setInterval(() => {
    elementText += ".";

    if (elementText === "....") {
      elementText = "";
    }
  }, 300);

  return (
    <>
      <span> loading{elementText} </span>
    </>
  );
};

export default Loader;
