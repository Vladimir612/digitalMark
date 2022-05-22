import React, { useEffect, useState } from "react";
import Nav from "./../../components/Nav/Nav";
import "./Dashboard.scss";
import ApplicationsList from "./../../components/ApplicationsList/ApplicationsList";
import CurrentSituation from "./../../components/CurrentSituation/CurrentSituation";
import { usePrijave } from "./../../data/applicationsContext";
import { useAdminInfo } from "../../data/adminInfoContext";

const Dashboard = () => {
  const { adminInfo } = useAdminInfo();
  const [otvorenNav, setOtvorenNav] = useState(true);
  const [activeTab, setActiveTab] = useState(1);
  const { prijave, fetchPrijave } = usePrijave();

  useEffect(() => {
    if (adminInfo) {
      setActiveTab(adminInfo.dozvola === 3 ? 3 : 1);
      fetchPrijave();
    }
  }, [adminInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="dashboard-page">
      <Nav
        otvorenNav={otvorenNav}
        setOtvorenNav={setOtvorenNav}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === 1 && (
        <div className={otvorenNav ? "content opened-nav" : "content"}>
          <ApplicationsList
            prijave={prijave.filter(
              (prijava) =>
                prijava.statusHR === "neocenjen" &&
                prijava.zelja.panel.ocena === 0
            )}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      )}
      {activeTab === 2 && (
        <div className={otvorenNav ? "content opened-nav" : "content"}>
          <ApplicationsList
            prijave={prijave.filter(
              (prijava) =>
                (prijava.statusHR === "ocenjen" ||
                  prijava.zelja.panel.ocena !== 0) &&
                prijava.statusHR !== "finalno"
            )}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      )}
      {activeTab === 3 && (
        <div className={otvorenNav ? "content opened-nav" : "content"}>
          <ApplicationsList
            prijave={prijave.filter(
              (prijava) => prijava.statusHR === "finalno"
            )}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      )}
      {activeTab === 4 && (
        <div className={otvorenNav ? "content opened-nav" : "content"}>
          <ApplicationsList
            prijave={prijave.filter(
              (prijava) =>
                prijava.oznacen === true &&
                (prijava.statusHR === "finalno" || adminInfo.dozvola !== 3)
            )}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      )}
      {activeTab === 5 && (
        <div className={otvorenNav ? "content opened-nav" : "content"}>
          <ApplicationsList
            prijave={prijave.filter(
              (prijava) =>
                prijava.statusHR === "finalno" &&
                prijava.statusLogistika === "nesmesten"
            )}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      )}
      {activeTab === 6 && (
        <div className={otvorenNav ? "content opened-nav" : "content"}>
          <ApplicationsList
            prijave={prijave.filter(
              (prijava) =>
                prijava.statusHR === "finalno" &&
                prijava.statusLogistika === "smesten"
            )}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      )}
      {activeTab === 8 && <CurrentSituation />}
    </div>
  );
};

export default Dashboard;
