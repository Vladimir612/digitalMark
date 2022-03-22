import React from "react";
import "./Prijava.scss";
import CustomButton from "./../../Utilities/CustomButton";

const Prijava = (props) => {
  const handleOcena = () => {
    console.log("oceni");
  };
  const handleSmestiUfinalno = () => {
    console.log("smesti u finalno");
  };
  return (
    <div className="kartica-za-prijavu">
      <div className="wrapper-kartica">
        <div className="top">
          <div className="top_left">
            <div className="idPrijave">1</div>
          </div>
          <div className="glavniMejl">Marko Markovic</div>
          <div className="indikatori">
            <div className="indikator1"></div>
            <div className="indikator2"></div>
          </div>
        </div>

        <div className="middle">
          <h4>Privatan mejl:</h4>
          <p className="priv_mejl">marko.markovic@gmail.com</p>
          <h4>Fonov mejl:</h4>
          <p className="fon_mejl">mm20200203@student.fon.bg.ac.rs</p>
          <div className="zelja">
            <h3>Želja</h3>
            <p className="panel">
              <span>Panel: </span>Da
            </p>
            <p className="tech-challenge">
              <span>Tech challenge: </span>Da
            </p>
            <p className="speed-dating">
              <span>Speed dating: </span>Da
            </p>
            <p className="radionice">
              <span>Radionice: </span>React, Angular, NodeJS
            </p>
          </div>
          <div className="info-za-logistiku">
            <h3>Info za logistiku</h3>
            <p className="panel">
              <span>Panel: </span>Da
            </p>
            <p className="tech-challenge">
              <span>Tech challenge: </span>Da
            </p>
            <p className="speed-dating">
              <span>Speed dating: </span>Da
            </p>
            <p className="radionice">
              <span>Radionice: </span>React, Angular, NodeJS
            </p>
          </div>
        </div>
        <div className="buttons">{props.aktivanTab === 3 && alert("poz")}</div>
      </div>
    </div>
  );
};

export default Prijava;

{
  /* <>
              {console.log("uslo")}
              <CustomButton onClick={handleOcena}>Izmeni ocenu</CustomButton>
              <CustomButton onClick={handleSmestiUfinalno}>
                Smesti u finalno
              </CustomButton>
            </> */
}
