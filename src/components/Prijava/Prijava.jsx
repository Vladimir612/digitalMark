import React from "react";
import { useState } from "react";
import "./Prijava.scss";

const Prijava = () => {
  //const [indikator1, setIndikator1] = useState("");
  //isto za idPrijave mozda
  //const [idPrijave,setIdPrijave] = useState(document.getElementById(""))

  return (
    <div className="kartica-za-prijavu">
      <div className="wrapper-kartica">
        <div className="top">
          <div className="top_left">
            <div className="idPrijave">1</div>
            <div className="glavniMejl">marko.markovic@gmail.com</div>
          </div>
          <div className="indikatori">
            <div className="indikator1"></div>
            <div className="indikator2"></div>
          </div>
        </div>

        <div className="middle">
          <p className="fon_mejl">mm20200203@student.fon.bg.ac.rs</p>
          <p className="izabrano">
            {/* mislim da moze samo u paragraf pa da se na becku prosledi ono sto je cekirano
            ako ne menjamo */}
            Panel diskusija<br></br> Speed dating<br></br> Treca radionica
            <br></br>
          </p>
        </div>
        <div className="buttons">
          <button className="dugme procitajIOceni">Pročitaj i oceni</button>
          <button className="dugme dodajUOcenjeno">Dodaj u ocenjeno </button>
          <button className="dugme dodajUFinalno">Dodaj u finalno</button>
        </div>
      </div>
    </div>
  );
};

export default Prijava;
