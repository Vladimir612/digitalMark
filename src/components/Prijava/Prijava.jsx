import React, { useState } from "react";
import "./Prijava.scss";
import CustomButton from "./../../Utilities/CustomButton";
import { IoIosClose } from "react-icons/io";

const Prijava = (props) => {
  const handleOcena = () => {
    console.log("oceni");
  };
  // const handleSmestiUfinalno = () => {
  //   console.log("smesti u finalno");
  // };

  const [vidljivoDetaljnije, setVidljivoDetaljnije] = useState(false);
  const [ocenaPanel, setOcenaPanel] = useState(0);
  const errorPoruka = "Morate uneti vrednost izmedju 0 i 25";

  //info-za-logistiku
  const [ucestvujeNaPanelu, setUcestvujeNaPanelu] = useState(false);
  const [tech, setTech] = useState("");
  const [speed, setSpeed] = useState("");
  const [radionice, setRadionice] = useState("");

  return (
    <>
      {vidljivoDetaljnije && (
        <div className="modal-detaljnije">
          <div className="modal-content">
            <div className="zatvori-dugme">
              <IoIosClose
                size={40}
                color="#cc203a"
                onClick={() => setVidljivoDetaljnije(false)}
              />
            </div>

            <h1>Želja</h1>
            <div className="zelja">
              <div className="panel">
                <h2>Panel</h2>
                <p>Šta želite da čujete na panelu?</p>
                <p>
                  {
                    "fdhjbvj svhbdfkjvbk vshbdfjvhbjh sjhjvbdjhfv fhjvbdjhfvb jfhvbjdhfbv"
                  }
                </p>
              </div>
              <div className="tech-challenge">
                <h2>Tech challenge</h2>
                <h4>Prethodno iskustvo: </h4>
                <p>
                  {
                    "fdhjbvj svhbdfkjvbk vshbdfjvhbjh sjhjvbdjhfv fhjvbdjhfvb jfhvbjdhfbv, fdhjbvj svhbdfkjvbk vshbdfjvhbjh sjhjvbdjhfv fhjvbdjhfvb jfhvbjdhfbv, fdhjbvj svhbdfkjvbk vshbdfjvhbjh sjhjvbdjhfv fhjvbdjhfvb jfhvbjdhfbv"
                  }
                </p>
                <h4>Tehnologije: </h4>
                <p>{"Java, React, NodeJS"}</p>
                <h4>Sa kim bi želeo da učestvuješ: </h4>
                <p>{"Milan Milanović, Jovan Jovanović, Nemanja Rutović"}</p>
                <h4>Za koje kompanije se prijavljuješ: </h4>
                <p>{"Raiffeisen, A1, EyeSee, Prime software"}</p>
              </div>
              <div className="speed-dating">
                <h2>Speed dating</h2>
                <h4>Za koje kompanije se prijavljuješ: </h4>
                <p>{"Raiffeisen, A1, EyeSee, Prime software"}</p>
              </div>
              <div className="radionice">
                <h2>Radionice: </h2>
                <ul>
                  <li>Uvod u Angular</li>
                  <li>3D game development</li>
                </ul>
                <p className="motivaciono">
                  {
                    "fdhjbvj svhbdfkjvbk vshbdfjvhbjh sjhjvbdjhfv fhjvbdjhfvb jfhvbjdhfbv, fdhjbvj svhbdfkjvbk vshbdfjvhbjh sjhjvbdjhfv fhjvbdjhfvb jfhvbjdhfbv, fdhjbvj svhbdfkjvbk vshbdfjvhbjh sjhjvbdjhfv fhjvbdjhfvb jfhvbjdhfbv, fdhjbvj svhbdfkjvbk vshbdfjvhbjh sjhjvbdjhfv fhjvbdjhfvb jfhvbjdhfbv, fdhjbvj svhbdfkjvbk vshbdfjvhbjh sjhjvbdjhfv fhjvbdjhfvb jfhvbjdhfbv"
                  }
                </p>
              </div>
            </div>
            <div className="ostalo">
              <div className="hr-posao">
                <div className="oceni">
                  <p>Oceni panel: </p>
                  <div>
                    <input
                      type="text"
                      className="ocena-input"
                      value={ocenaPanel}
                      onChange={(e) => setOcenaPanel(e.target.value)}
                    />
                    <CustomButton
                      onClick={handleOcena}
                      disabled={ocenaPanel <= 0 || ocenaPanel > 25}
                    >
                      Oceni
                    </CustomButton>
                    <p>{errorPoruka}</p>
                  </div>
                </div>
                <div className="info-za-logistiku">
                  <h3>Info za logistiku</h3>
                  <div className="panel">
                    <span>Panel: </span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        className={
                          ucestvujeNaPanelu ? "checkbox checked" : "checkbox"
                        }
                        onClick={() => setUcestvujeNaPanelu(!ucestvujeNaPanelu)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="tech-challenge">
                    <span>Tech challenge: </span>
                    <input
                      type="text"
                      value={tech}
                      onChange={(e) => setTech(e.target.value)}
                    />
                  </div>
                  <div className="speed-dating">
                    <span>Speed dating: </span>
                    <input
                      type="text"
                      value={speed}
                      onChange={(e) => setSpeed(e.target.value)}
                    />
                  </div>
                  <div className="radionice">
                    <span>Radionice: </span>
                    <input
                      type="text"
                      value={radionice}
                      onChange={(e) => setRadionice(e.target.value)}
                    />
                  </div>
                  <CustomButton
                    onClick={handleOcena}
                    disabled={tech === "" || speed === "" || radionice === ""}
                  >
                    Pošalji info za logistiku
                  </CustomButton>
                </div>
              </div>
              <div className="detaljnije-osnovne-info">
                <h2>Dodatne informacije</h2>
                <div className="broj-tel">
                  <h4>Broj telefona: </h4>
                  <p>0643104590</p>
                </div>
                <div className="godina-studija">
                  <h4>Godina studija: </h4>
                  <p>Prva</p>
                </div>
                <div className="newsletter">
                  <h4>Newsletter: </h4>
                  <p>Želi da prima informacije od Fonisa</p>
                </div>
              </div>
              <div className="napomena-container">
                <textarea className="napomena" placeholder="Napomena..." />
                <CustomButton
                  onClick={handleOcena}
                  // disabled={ocenaPanel <= 0 || ocenaPanel > 25}
                >
                  Okači napomenu
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="kartica-za-prijavu">
        <div className="top">
          <div className="imePrezime">Marko Markovic</div>
          <div className="indikatori">
            <div className="indikator1"></div>
            <div className="indikator2"></div>
          </div>
        </div>

        <div className="middle">
          <div className="prijava-osnovno">
            <h4>Privatan mejl:</h4>
            <p className="priv_mejl">marko.markovic@gmail.com</p>
            <h4>Fonov mejl:</h4>
            <p className="fon_mejl">mm20200203@student.fon.bg.ac.rs</p>
            <h4>Link do CV-a</h4>
            <a href="http" target="_blank" rel="noreferrer">
              linklinklinklinklinklinklinklinklinklinklinklinklinklinklink
            </a>
            <p>
              Fakultet: <span>FON</span>
            </p>
          </div>
        </div>
        <div className="buttons">
          {
            <>
              <CustomButton onClick={() => setVidljivoDetaljnije(true)}>
                Prikaži detaljnije
              </CustomButton>
            </>
          }
        </div>
      </div>
    </>
  );
};

export default Prijava;
