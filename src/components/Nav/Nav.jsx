import React from "react";
import "./Nav.scss";
import {
  BsClipboardCheck,
  BsClipboardX,
  BsClipboardPlus,
  BsPeopleFill,
  BsStarFill,
  BsPeople,
  BsClipboardData,
} from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";

const Nav = (props) => {
  const { aktivanTab, setAktivanTab } = props;
  console.log(window.innerHeight);

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
        <li
          className={aktivanTab === 1 ? "aktivan" : ""}
          onClick={() => setAktivanTab(1)}
        >
          {aktivanTab === 1 && <span className="kvadrat kvadrat-1"></span>}
          <BsClipboardX size={30} color="white" />
          {props.otvorenNav && (
            <span className="link-name">Neocenjene prijave</span>
          )}
          {aktivanTab === 1 && <span className="kvadrat kvadrat-2"></span>}
        </li>

        <li
          className={aktivanTab === 2 ? "aktivan" : ""}
          onClick={() => setAktivanTab(2)}
        >
          {aktivanTab === 2 && <span className="kvadrat kvadrat-1"></span>}
          <BsClipboardCheck size={30} color="white" />
          {props.otvorenNav && (
            <span className="link-name">Ocenjene prijave</span>
          )}
          {aktivanTab === 2 && <span className="kvadrat kvadrat-2"></span>}
        </li>

        <li
          className={aktivanTab === 3 ? "aktivan" : ""}
          onClick={() => setAktivanTab(3)}
        >
          {aktivanTab === 3 && <span className="kvadrat kvadrat-1"></span>}
          <AiOutlineFileDone size={30} color="white" />
          {props.otvorenNav && <span className="link-name">Finalno</span>}
          {aktivanTab === 3 && <span className="kvadrat kvadrat-2"></span>}
        </li>

        <li
          className={aktivanTab === 4 ? "aktivan" : ""}
          onClick={() => setAktivanTab(4)}
        >
          {aktivanTab === 4 && <span className="kvadrat kvadrat-1"></span>}
          <BsStarFill size={30} color="white" />
          {props.otvorenNav && <span className="link-name">Označene</span>}
          {aktivanTab === 4 && <span className="kvadrat kvadrat-2"></span>}
        </li>

        <li
          className={aktivanTab === 5 ? "aktivan" : ""}
          onClick={() => setAktivanTab(5)}
        >
          {aktivanTab === 5 && <span className="kvadrat kvadrat-1"></span>}
          <BsClipboardPlus size={30} color="white" />
          {props.otvorenNav && <span className="link-name">Moje izmene</span>}
          {aktivanTab === 5 && <span className="kvadrat kvadrat-2"></span>}
        </li>

        <li
          className={aktivanTab === 6 ? "aktivan" : ""}
          onClick={() => setAktivanTab(6)}
        >
          {aktivanTab === 6 && <span className="kvadrat kvadrat-1"></span>}
          <BsPeople size={30} color="white" />
          {props.otvorenNav && <span className="link-name">Nisu smešteni</span>}
          {aktivanTab === 6 && <span className="kvadrat kvadrat-2"></span>}
        </li>

        <li
          className={aktivanTab === 7 ? "aktivan" : ""}
          onClick={() => setAktivanTab(7)}
        >
          {aktivanTab === 7 && <span className="kvadrat kvadrat-1"></span>}
          <BsPeopleFill size={30} color="white" />
          {props.otvorenNav && <span className="link-name">Smešteni</span>}
          {aktivanTab === 7 && <span className="kvadrat kvadrat-2"></span>}
        </li>

        <li
          className={aktivanTab === 8 ? "aktivan" : ""}
          onClick={() => setAktivanTab(8)}
        >
          {aktivanTab === 8 && <span className="kvadrat kvadrat-1"></span>}
          <BsClipboardData size={30} color="white" />
          {props.otvorenNav && (
            <span className="link-name">Trenutno stanje</span>
          )}
          {aktivanTab === 8 && <span className="kvadrat kvadrat-2"></span>}
        </li>
      </ul>
      <div className="profile-details">
        <div className="profile-content">
          <FaUserCircle size={30} color="white" />
          {props.otvorenNav && <p className="job">Pera Perić</p>}
        </div>
      </div>
    </div>
  );
};

export default Nav;
