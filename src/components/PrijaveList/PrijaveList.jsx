import React from "react";
import Prijava from "../Prijava/Prijava";
import "./PrijaveList.scss";

const PrijaveList = (props) => {
  return (
    <div className="prijave-list">
      {props.prijave.map((prijava, index) => {
        return <Prijava key={index} />;
      })}
    </div>
  );
};

export default PrijaveList;
