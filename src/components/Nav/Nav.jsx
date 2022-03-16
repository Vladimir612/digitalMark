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
  BsPersonFill,
} from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/images/logo.png";

const Nav = () => {
  return (
    <nav>
      <div className="toggle-nav">
        <GiHamburgerMenu />
      </div>
      <div className="logo">
        <img src={logo} alt="C2S" />
      </div>
      <ul className="nav-tabovi">
        <li>
          <BsClipboardX />
          <span>Neocenjene prijave</span>
        </li>
        <li>
          <BsClipboardCheck />
          <span>Ocenjene prijave</span>
        </li>
        <li>
          <AiOutlineFileDone />
          <span>Finalno</span>
        </li>
        <li>
          <BsStarFill />
          <span>Označene</span>
        </li>
        <li>
          <BsClipboardPlus />
          <span>Moje izmene</span>
        </li>
        <li>
          <BsPeople />
          <span>Nisu smešteni</span>
        </li>
        <li>
          <BsPeopleFill />
          <span>Smešteni</span>
        </li>
        <li>
          <BsClipboardData />
          <span>Trenutno stanje</span>
        </li>
      </ul>
      <div className="korisnik">
        <div className="korisnik-slika">
          <BsPersonFill />
        </div>
        <p className="ime-korisnika">Pera Perić</p>
      </div>
    </nav>
  );
};

export default Nav;
