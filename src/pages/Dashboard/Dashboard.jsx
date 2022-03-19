import React from "react";
import Prijava from "../../components/Prijava/Prijava";
import Nav from "./../../components/Nav/Nav";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Nav />
      <div className="content">
        <Prijava />
      </div>
    </div>
  );
};

export default Dashboard;
