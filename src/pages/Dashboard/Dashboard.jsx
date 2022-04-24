import React, { useEffect, useState } from "react";
import Nav from "./../../components/Nav/Nav";
import "./Dashboard.scss";
import PrijaveList from "./../../components/PrijaveList/PrijaveList";
import TrenutnoStanje from "./../../components/TrenutnoStanje/TrenutnoStanje";
import { usePrijave } from "./../../data/prijaveContext";
import { useAdminInfo } from "../../data/adminInfoContext";

const Dashboard = () => {
  const { adminInfo } = useAdminInfo();
  const [otvorenNav, setOtvorenNav] = useState(true);
  const [aktivanTab, setAktivanTab] = useState(1);
  const { prijave, fetchPrijave } = usePrijave();

  useEffect(() => {
    if (adminInfo) {
      setAktivanTab(adminInfo.dozvola === 3 ? 3 : 1);
      fetchPrijave();
    }
  }, [adminInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="dashboard-page">
      <Nav
        otvorenNav={otvorenNav}
        setOtvorenNav={setOtvorenNav}
        aktivanTab={aktivanTab}
        setAktivanTab={setAktivanTab}
      />
      {aktivanTab === 1 && (
        <div className={otvorenNav ? "content otvoren-nav" : "content"}>
          <PrijaveList
            prijave={prijave.filter(
              (prijava) =>
                prijava.statusHR === "neocenjen" &&
                prijava.zelja.panel.ocena === 0
            )}
            aktivanTab={aktivanTab}
            setAktivanTab={setAktivanTab}
          />
        </div>
      )}
      {aktivanTab === 2 && (
        <div className={otvorenNav ? "content otvoren-nav" : "content"}>
          <PrijaveList
            prijave={prijave.filter(
              (prijava) =>
                (prijava.statusHR === "ocenjen" ||
                  prijava.zelja.panel.ocena !== 0) &&
                prijava.statusHR !== "finalno"
            )}
            aktivanTab={aktivanTab}
            setAktivanTab={setAktivanTab}
          />
        </div>
      )}
      {aktivanTab === 3 && (
        <div className={otvorenNav ? "content otvoren-nav" : "content"}>
          <PrijaveList
            prijave={prijave.filter(
              (prijava) => prijava.statusHR === "finalno"
            )}
            aktivanTab={aktivanTab}
            setAktivanTab={setAktivanTab}
          />
        </div>
      )}
      {aktivanTab === 4 && (
        <div className={otvorenNav ? "content otvoren-nav" : "content"}>
          <PrijaveList
            prijave={prijave.filter(
              (prijava) =>
                prijava.oznacen === true &&
                (prijava.statusHR === "finalno" || adminInfo.dozvola !== 3)
            )}
            aktivanTab={aktivanTab}
            setAktivanTab={setAktivanTab}
          />
        </div>
      )}
      {aktivanTab === 5 && (
        <div className={otvorenNav ? "content otvoren-nav" : "content"}>
          <PrijaveList
            prijave={prijave.filter(
              (prijava) =>
                prijava.statusHR === "finalno" &&
                prijava.statusLogistika === "nesmesten"
            )}
            aktivanTab={aktivanTab}
            setAktivanTab={setAktivanTab}
          />
        </div>
      )}
      {aktivanTab === 6 && (
        <div className={otvorenNav ? "content otvoren-nav" : "content"}>
          <PrijaveList
            prijave={prijave.filter(
              (prijava) =>
                prijava.statusHR === "finalno" &&
                prijava.statusLogistika === "smesten"
            )}
            aktivanTab={aktivanTab}
            setAktivanTab={setAktivanTab}
          />
        </div>
      )}
      {aktivanTab === 8 && <TrenutnoStanje />}
    </div>
  );
};

export default Dashboard;
