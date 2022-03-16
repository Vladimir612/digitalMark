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
          <div className="idPrijave">#001</div>
          <div className="glavniMejl">marko.markovic@gmail.com</div>
          <div className="indikatori">
            <div className="indikator1"></div>
            <div className="indikator2"></div>
          </div>
        </div>

        <div className="middle">
          <p>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </p>
        </div>
        <div className="buttons">
          <button className="dugme">Pročitaj i oceni</button>
          <button className="dugme">Dodaj u ocenjeno </button>
          <button className="dugme">Dodaj u finalno </button>
        </div>
      </div>
    </div>
  );
};

export default Prijava;
