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
import logo from "../../assets/images/logo.png";
const style = { color: "white", fontSize: "1.5em" };
/*
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".toggle-nav");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classNameList.toggle("close");

})
*/

const Nav = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <div className="img-wrapper">
            <img className="slika-c2s" src={logo} alt="C2S" />
          </div>
          <span className="logo-name">DigitalMark</span>
        </div>

        <ul className="nav-links">
          <li>
            <div className="naw-row">
              <div className="icon-link">
                <BsClipboardX size={25} style={style} />
                <span className="link-name">Neocenjene prijave</span>
              </div>
            </div>
          </li>

          <li>
            <div className="naw-row">
              <div className="icon-link">
                <BsClipboardCheck size={25} style={style} />
                <span className="link-name">Ocenjene prijave</span>
              </div>
            </div>
          </li>

          <li>
            <div className="naw-row">
              <div className="icon-link">
                <AiOutlineFileDone size={25} style={style} />
                <span className="link-name">Finalno</span>
              </div>
            </div>
          </li>

          <li>
            <div className="naw-row">
              <BsStarFill size={25} style={style} />
              <span className="link-name">Označene</span>
            </div>
          </li>

          <li>
            <div className="naw-row">
              <BsClipboardPlus size={25} style={style} />
              <span className="link-name">Moje izmene</span>
            </div>
          </li>

          <li>
            <div className="naw-row">
              <BsPeople size={25} style={style} />
              <span className="link-name">Nisu smešteni</span>
            </div>
          </li>

          <li>
            <div className="naw-row">
              <BsPeopleFill size={25} style={style} />
              <span className="link-name">Smešteni</span>
            </div>
          </li>

          <li>
            <div className="naw-row">
              <BsClipboardData size={25} style={style} />
              <span className="link-name">Trenutno stanje</span>
            </div>
          </li>

          <div className="profile-details">
            <div className="profile-content">
              <div className="name-job">
                <div className="profile-name">
                  <FaUserCircle size={25} style={style} />
                </div>
              </div>
              <p className="job">Pera Perić</p>
            </div>
          </div>
        </ul>
        <div className="hamburger">
          <CgMenuRound size={35} color="#11101d" />
        </div>
      </div>
    </>
  );

  /* return (
    <nav className="sidebar">
      <div className="toggle-nav tekst-sidebar">
        <CgMenuRound size={25} style={style} />
      </div>
      
      <div className="logo">
        <img className="slika-c2s" src={logo} alt="C2S" />
      </div>

      <ul clasName="nav-tabovi">
      <li>
      <BsClipboardX size={25} style={style} />
          <span className="tekst-ikonice tekst-sidebar">
            Neocenjene prijave
          </span>
        </li>

        <li>
          <BsClipboardCheck size={25} style={style} />
          <span className="tekst-ikonice tekst-sidebar">Ocenjene prijave</span>
        </li>

        <li>
          <AiOutlineFileDone size={25} style={style} />
          <span className="tekst-ikonice tekst-sidebar">Finalno</span>
        </li>

        <li>
          <BsStarFill size={25} style={style} />
          <span className="tekst-ikonice tekst-sidebar">Označene</span>
        </li>

        <li>
          <BsClipboardPlus size={25} style={style} />
          <span className="tekst-ikonice tekst-sidebar">Moje izmene</span>
        </li>

        <li>
          <BsPeople size={25} style={style} />
          <span className="tekst-ikonice tekst-sidebar">Nisu smešteni</span>
        </li>

        <li>
          <BsPeopleFill size={25} style={style} />
          <span className="tekst-ikonice tekst-sidebar">Smešteni</span>
        </li>

        <li>
          <BsClipboardData size={25} style={style} />
          <span className="tekst-ikonice tekst-sidebar ">Trenutno stanje</span>
        </li>
      </ul>

      <div className="korisnik">
        <div className="korisnik-slika">
          <BsPersonFill size={25} style={style} />
        </div>
        <p className="ime-korisnika tekst-sidebar">Pera Perić</p>
      </div>
    </nav>
 );*/
};

export default Nav;
