import React from "react";
import Application from "../Application/Application";
import "./ApplicationsList.scss";

const ApplicationsList = (props) => {
  return (
    <div className="applications-list">
      {props.prijave.map((prijava, index) => {
        return (
          <Application
            key={index}
            activeTab={props.activeTab}
            setActiveTab={props.setActiveTab}
            data={prijava}
          />
        );
      })}
    </div>
  );
};

export default ApplicationsList;
