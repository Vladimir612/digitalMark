import React from "react";
import "./Lopta.scss";

const Lopta = (props) => {
  return (
    <div
      className={`lopta ${props.boja}`}
      style={{ width: props.width, height: props.height }}
    ></div>
  );
};

export default Lopta;
