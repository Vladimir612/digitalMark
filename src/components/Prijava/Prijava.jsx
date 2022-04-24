import React, { useState } from "react";
import "./Prijava.scss";
import CustomButton from "./../../Utilities/CustomButton";
import { IoIosClose } from "react-icons/io";
import { BsFlagFill, BsFlag } from "react-icons/bs";
import { usePrijave } from "../../data/prijaveContext";
import { useAdminInfo } from "../../data/adminInfoContext";

const Prijava = (props) => {
  const {
    oznaci,
    oceni,
    vratiUOcenjene,
    smestiUFinalno,
    infoZaLog,
    ostaviNapomenu,
    staviUSmestene,
    vratiIzSmestenih,
  } = usePrijave();

  const { adminInfo } = useAdminInfo();

  const [vidljivoDetaljnije, setVidljivoDetaljnije] = useState(false);
  const [ocenaPanel, setOcenaPanel] = useState(props.data.zelja.panel.ocena);
  const errorPoruka = "Morate uneti vrednost izmedju 0 i 25";

  //info-za-logistiku
  const [ucestvujeNaPanelu, setUcestvujeNaPanelu] = useState(
    props.data.infoZaLogistiku.panel
  );
  const [tech, setTech] = useState(props.data.infoZaLogistiku.techChallenge);
  const [speed, setSpeed] = useState(props.data.infoZaLogistiku.speedDating);
  const [radionice, setRadionice] = useState(
    props.data.infoZaLogistiku.radionica
  );
  const [napomena, setNapomena] = useState(props.data.napomena);

  const [oznacen, setOznacen] = useState(props.data.oznacen);

  const handleOcena = () => {
    oceni(props.data, ocenaPanel);
    setVidljivoDetaljnije(false);
  };

  const jelMozeUFinalno =
    !props.data.infoZaLogistiku.radionica &&
    !props.data.infoZaLogistiku.techChallenge &&
    !props.data.infoZaLogistiku.speedDating;

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
              {props.data.zelja.panel.staBiCuli !== "" && (
                <div className="panel">
                  <h2>Panel</h2>
                  <p>Šta želite da čujete na panelu?</p>
                  <p>{props.data.zelja.panel.staBiCuli}</p>
                </div>
              )}
              {props.data.zelja.techChallenge.prethodnoIskustvo !== "" && (
                <div className="tech-challenge">
                  <h2>Tech challenge</h2>
                  <h4>
                    Da li si do sad učestvovao/la u rešavanju IT studije slučaja
                    i ako jesi kakvi su ti utisci?
                  </h4>
                  <p>{props.data.zelja.techChallenge.prethodnoIskustvo}</p>
                  <h4>Tehnologije: </h4>
                  <p>{props.data.zelja.techChallenge.tehnologije}</p>
                  <h4>Sa kim bi želeo da učestvuješ: </h4>
                  <p>{props.data.zelja.techChallenge.saKim}</p>
                  <h4>Za koje kompanije se prijavljuješ: </h4>
                  <ul>
                    {props.data.zelja.techChallenge.kompanije.map(
                      (komp, index) => (
                        <li key={index}>{komp}</li>
                      )
                    )}
                  </ul>
                </div>
              )}
              {props.data.zelja.speedDating.length > 0 && (
                <div className="speed-dating">
                  <h2>Speed dating</h2>
                  <h4>Za koje kompanije se prijavljuješ: </h4>
                  <ul>
                    {props.data.zelja.speedDating.map((komp, index) => (
                      <li key={index}>{komp}</li>
                    ))}
                  </ul>
                </div>
              )}
              {props.data.zelja.radionice.motivaciono !== "" && (
                <div className="radionice">
                  <h2>Radionice</h2>
                  <ul>
                    {props.data.zelja.radionice.sveRadionice.map(
                      (komp, index) => (
                        <li key={index}>{komp}</li>
                      )
                    )}
                  </ul>
                  <h4>Šta te motiviše da se u daljoj karijeri baviš IT-jem?</h4>
                  <p className="motivaciono">
                    {props.data.zelja.radionice.motivaciono}
                  </p>
                </div>
              )}
            </div>
            <div className="ostalo">
              <div className="hr-posao">
                {(props.data.statusHR === "ocenjen" ||
                  props.data.statusHR === "neocenjen") &&
                  adminInfo.dozvola === 2 && (
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
                  )}

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
                  {adminInfo.dozvola === 2 &&
                    props.data.statusHR === "ocenjen" && (
                      <CustomButton
                        onClick={() =>
                          infoZaLog(
                            props.data,
                            ucestvujeNaPanelu,
                            tech,
                            speed,
                            radionice
                          )
                        }
                        disabled={
                          tech === "" || speed === "" || radionice === ""
                        }
                      >
                        Pošalji info za logistiku
                      </CustomButton>
                    )}
                </div>
              </div>
              <div className="detaljnije-osnovne-info">
                <h2>Dodatne informacije</h2>
                <div className="broj-tel">
                  <h4>Broj telefona: </h4>
                  <p>{props.data.brojTelefona}</p>
                </div>
                <div className="godina-studija">
                  <h4>Godina studija: </h4>
                  <p>{props.data.godinaStudija}</p>
                </div>
                <div className="newsletter">
                  <h4>Newsletter: </h4>
                  <p>
                    {props.data.newsletter
                      ? "Želi da prima informacije od Fonisa"
                      : " Ne želi da prima informacije od Fonisa"}
                  </p>
                </div>
              </div>
              <div className="napomena-container">
                <textarea
                  className="napomena"
                  placeholder="Napomena..."
                  value={napomena}
                  onChange={(e) => setNapomena(e.target.value)}
                />
                <CustomButton
                  onClick={() => ostaviNapomenu(props.data, napomena)}
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
          <div className="imePrezime">{props.data.imePrezime}</div>

          <div
            className="flagged"
            onClick={() => {
              oznaci(props.data);
              setOznacen(!oznacen);
            }}
          >
            {oznacen ? (
              <BsFlagFill color="#cc203a" size={20} />
            ) : (
              <BsFlag color="#cc203a" size={20} />
            )}
          </div>
        </div>

        <div className="middle">
          <div className="prijava-osnovno">
            <h4>Privatan mejl:</h4>
            <p className="priv_mejl">{props.data.emailPriv}</p>
            {props.data.zelja.techChallenge.emailFon !== "" && (
              <>
                <h4>Fonov mejl:</h4>
                <p className="fon_mejl">
                  {props.data.zelja.techChallenge.emailFon}
                </p>
              </>
            )}

            <h4>Link do CV-a</h4>
            <a href={props.data.linkCv} target="_blank" rel="noreferrer">
              {props.data.linkCv}
            </a>
            <p>
              Fakultet: <span>{props.data.fakultet}</span>
            </p>
          </div>
        </div>
        <div className="buttons">
          {
            <>
              <CustomButton onClick={() => setVidljivoDetaljnije(true)}>
                Prikaži detaljnije
              </CustomButton>
              {props.data.statusHR === "finalno" && adminInfo.dozvola === 2 && (
                <CustomButton onClick={() => vratiUOcenjene(props.data)}>
                  Vrati u ocenjene
                </CustomButton>
              )}
              {props.data.statusHR === "ocenjen" && adminInfo.dozvola === 2 && (
                <CustomButton
                  disabled={jelMozeUFinalno}
                  onClick={() => smestiUFinalno(props.data)}
                >
                  Smesti u finalno
                </CustomButton>
              )}
              {props.data.statusLogistika === "smesten" &&
                adminInfo.dozvola === 3 && (
                  <CustomButton onClick={() => vratiIzSmestenih(props.data)}>
                    Vrati iz smestenih
                  </CustomButton>
                )}
              {props.data.statusLogistika === "nesmesten" &&
                adminInfo.dozvola === 3 && (
                  <CustomButton onClick={() => staviUSmestene(props.data)}>
                    Stavi u smestene
                  </CustomButton>
                )}
            </>
          }
        </div>
      </div>
    </>
  );
};

export default Prijava;
