import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="toggle-nav"></div>
      <ul className="nav-tabovi">
        <li>Neocenjene prijave</li>
        <li>Ocenjene prijave</li>
        <li>Finalno</li>
        <li>Označene</li>
        <li>Moje izmene</li>
        <li>Nisu smešteni</li>
        <li>Smešteni</li>
        <li>Trenutno stanje</li>
      </ul>
      <div className="korisnik">
        <div className="korisnik-slika">
          <img src="" alt="" />
        </div>
        <p className="ime-korisnika">Pera Perić</p>
      </div>
    </nav>
  );
};

export default Nav;
