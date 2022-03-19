import React, { useState } from "react";
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

const Nav = () => {
  const [otvoren, setOtvoren] = useState(true);

  return (
    <div className={otvoren ? "sidebar" : "sidebar closed"}>
      <div className="app-details">
        <div
          className="hamburger"
          style={{ cursor: "pointer" }}
          onClick={() => setOtvoren(!otvoren)}
        >
          <CgMenuRound size={35} color="white" />
        </div>
        {otvoren && <span className="app-name">DigitalMark</span>}
      </div>

      <ul className="nav-links">
        <li>
          <BsClipboardX size={30} color="white" />
          {otvoren && <span className="link-name">Neocenjene prijave</span>}
        </li>

        <li>
          <BsClipboardCheck size={30} color="white" />
          {otvoren && <span className="link-name">Ocenjene prijave</span>}
        </li>

        <li>
          <AiOutlineFileDone size={30} color="white" />
          {otvoren && <span className="link-name">Finalno</span>}
        </li>

        <li>
          <BsStarFill size={30} color="white" />
          {otvoren && <span className="link-name">Označene</span>}
        </li>

        <li>
          <BsClipboardPlus size={30} color="white" />
          {otvoren && <span className="link-name">Moje izmene</span>}
        </li>

        <li>
          <BsPeople size={30} color="white" />
          {otvoren && <span className="link-name">Nisu smešteni</span>}
        </li>

        <li>
          <BsPeopleFill size={30} color="white" />
          {otvoren && <span className="link-name">Smešteni</span>}
        </li>

        <li>
          <BsClipboardData size={30} color="white" />
          {otvoren && <span className="link-name">Trenutno stanje</span>}
        </li>

        <div className="profile-details">
          <div className="profile-content">
            <FaUserCircle size={30} color="white" />
            {otvoren && <p className="job">Pera Perić</p>}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
