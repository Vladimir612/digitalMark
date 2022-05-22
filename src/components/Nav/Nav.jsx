import React, { useState } from "react";
import "./Nav.scss";
import {
  BsClipboardCheck,
  BsClipboardX,
  BsPeopleFill,
  BsStarFill,
  BsPeople,
  BsClipboardData,
} from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAdminInfo } from "./../../data/adminInfoContext";
import { motion } from "framer-motion";

const Nav = (props) => {
  const { activeTab, setActiveTab } = props;
  const [visibleUserInfo, setVisibleUserInfo] = useState(false);
  let navigate = useNavigate();

  const { adminInfo, setAdminInfo } = useAdminInfo();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("pass");
    setAdminInfo({});
    navigate("/login");
  };

  const isEmpty = Object.keys(adminInfo).length === 0;

  let username = "";
  let forname = "";
  let lastname = "";

  if (!isEmpty) {
    username = adminInfo.email.split("@")[0];
    forname = username.split(".")[0];
    lastname = username.split(".")[1];
    username = forname + " " + lastname;
  }

  return (
    <div className={props.otvorenNav ? "sidebar" : "sidebar closed"}>
      <div className="app-details">
        <div
          className="hamburger"
          style={{ cursor: "pointer" }}
          onClick={() => props.setOtvorenNav(!props.otvorenNav)}
        >
          <CgMenuRound size={35} color="white" />
        </div>
        {props.otvorenNav && <span className="app-name">DigitalMark</span>}
      </div>

      <ul className="nav-links">
        {(adminInfo.dozvola === 2 || adminInfo.dozvola === 1) && (
          <li
            className={activeTab === 1 ? "active" : ""}
            onClick={() => setActiveTab(1)}
          >
            {activeTab === 1 && <span className="square square-1"></span>}
            <BsClipboardX size={30} color="white" />
            {props.otvorenNav && (
              <span className="link-name">Neocenjene prijave</span>
            )}
            {activeTab === 1 && <span className="square square-2"></span>}
          </li>
        )}

        {(adminInfo.dozvola === 2 || adminInfo.dozvola === 1) && (
          <li
            className={activeTab === 2 ? "active" : ""}
            onClick={() => setActiveTab(2)}
          >
            {activeTab === 2 && <span className="square square-1"></span>}
            <BsClipboardCheck size={30} color="white" />
            {props.otvorenNav && (
              <span className="link-name">Ocenjene prijave</span>
            )}
            {activeTab === 2 && <span className="square square-2"></span>}
          </li>
        )}

        <li
          className={activeTab === 3 ? "active" : ""}
          onClick={() => setActiveTab(3)}
        >
          {activeTab === 3 && <span className="square square-1"></span>}
          <AiOutlineFileDone size={30} color="white" />
          {props.otvorenNav && <span className="link-name">Finalno</span>}
          {activeTab === 3 && <span className="square square-2"></span>}
        </li>

        <li
          className={activeTab === 4 ? "active" : ""}
          onClick={() => setActiveTab(4)}
        >
          {activeTab === 4 && <span className="square square-1"></span>}
          <BsStarFill size={30} color="white" />
          {props.otvorenNav && <span className="link-name">Označene</span>}
          {activeTab === 4 && <span className="square square-2"></span>}
        </li>

        {(adminInfo.dozvola === 3 || adminInfo.dozvola === 1) && (
          <li
            className={activeTab === 5 ? "active" : ""}
            onClick={() => setActiveTab(5)}
          >
            {activeTab === 5 && <span className="square square-1"></span>}
            <BsPeople size={30} color="white" />
            {props.otvorenNav && (
              <span className="link-name">Nisu smešteni</span>
            )}
            {activeTab === 5 && <span className="square square-2"></span>}
          </li>
        )}

        {(adminInfo.dozvola === 3 || adminInfo.dozvola === 1) && (
          <li
            className={activeTab === 6 ? "active" : ""}
            onClick={() => setActiveTab(6)}
          >
            {activeTab === 6 && <span className="square square-1"></span>}
            <BsPeopleFill size={30} color="white" />
            {props.otvorenNav && <span className="link-name">Smešteni</span>}
            {activeTab === 6 && <span className="square square-2"></span>}
          </li>
        )}

        <li
          className={activeTab === 8 ? "active" : ""}
          onClick={() => setActiveTab(8)}
        >
          {activeTab === 8 && <span className="square square-1"></span>}
          <BsClipboardData size={30} color="white" />
          {props.otvorenNav && (
            <span className="link-name">Trenutno stanje</span>
          )}
          {activeTab === 8 && <span className="square square-2"></span>}
        </li>
      </ul>
      <div className="profile-details">
        <div
          className="profile-content"
          onClick={() => setVisibleUserInfo(!visibleUserInfo)}
          style={{ cursor: "pointer" }}
        >
          <FaUserCircle size={30} color="#cc203a" />
          {props.otvorenNav && <p className="job">{username}</p>}
        </div>
        {visibleUserInfo && (
          <div className="profile-more-details">
            <p>Uloga: {adminInfo.uloga}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
              }}
              className="btn"
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              Izloguj se
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
