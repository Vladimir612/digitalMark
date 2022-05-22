import React from "react";
import "./Ball.scss";

const Ball = (props) => {
  return (
    <div
      className={`ball ${props.boja}`}
      style={{ width: props.width, height: props.height }}
    ></div>
  );
};

export default Ball;
