import React from "react";
import Prijava from "../Prijava/Prijava";
import "./PrijaveList.scss";

const PrijaveList = (props) => {
  return (
    <div className="prijave-list">
      {props.prijave.map((prijava, index) => {
        return (
          <Prijava
            key={index}
            aktivanTab={props.aktivanTab}
            setAktivanTab={props.setAktivanTab}
            data={prijava}
          />
        );
      })}
    </div>
  );
};

export default PrijaveList;
