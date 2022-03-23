import React, { useState } from "react";
import Nav from "./../../components/Nav/Nav";
import "./Dashboard.scss";
import PrijaveList from "./../../components/PrijaveList/PrijaveList";

const Dashboard = () => {
  const [otvorenNav, setOtvorenNav] = useState(true);
  const prijave = ["prijava1", "prijava1", "prijava1", "prijava1"];
  const [aktivanTab, setAktivanTab] = useState(1);
  return (
    <div className="dashboard-page">
      <Nav
        otvorenNav={otvorenNav}
        setOtvorenNav={setOtvorenNav}
        aktivanTab={aktivanTab}
        setAktivanTab={setAktivanTab}
      />
      {/* {aktivanTab === 3 ? alert("radi u dashu") : alert("ne radi")} */}
      <div className={otvorenNav ? "content otvoren-nav" : "content"}>
        <PrijaveList
          prijave={prijave}
          aktivanTab={aktivanTab}
          setAktivanTab={setAktivanTab}
        />
      </div>
    </div>
  );
};

export default Dashboard;
