import React, { useEffect, useState } from "react";
import KarticaTrenutnoStanje from "./KarticaTrenutnoStanje";
import "./TrenutnoStanje.scss";
import { usePrijave } from "./../../data/prijaveContext";

const TrenutnoStanje = () => {
  const { prijave } = usePrijave();
  //Radionice
  const [countMachineLearning, setCountMachineLearning] = useState(0);
  const [count3D, setCount3D] = useState(0);
  const [countRadionicaMonetizacija, setCountRadionicaMonetizacija] =
    useState(0);
  const [countRadionicaSpring, setCountRadionicaSpring] = useState(0);
  const [countRadionicaAngular, setCountRadionicaAngular] = useState(0);
  const [countRadionicaDevops, setCountRadionicaDevops] = useState(0);

  //Tech challenge
  const [countTechRaiffeisen, setCountTechRaiffeisen] = useState(0);
  const [countTechA1, setCountTechA1] = useState(0);
  const [countTechEyesee, setCountTechEyesee] = useState(0);
  const [countTechAdacta, setCountTechAdacta] = useState(0);
  const [countTechSemos, setCountTechSemos] = useState(0);
  const [countTechPrime, setCountTechPrime] = useState(0);

  //Speed dating
  const [countSpeedRaiffeisen, setCountSpeedRaiffeisen] = useState(0);
  const [countSpeedA1, setCountSpeedA1] = useState(0);
  const [countSpeedEyesee, setCountSpeedEyesee] = useState(0);
  const [countSpeedAdacta, setCountSpeedAdacta] = useState(0);
  const [countSpeedSemos, setCountSpeedSemos] = useState(0);
  const [countSpeedPrime, setCountSpeedPrime] = useState(0);

  const [countPanel, setCountPanel] = useState(0);

  const prebrojLjude = () => {
    prijave &&
      prijave.forEach((prijava) => {
        //radionice
        if (prijava.zelja.radionice.sveRadionice.includes("Machine learning"))
          setCountMachineLearning(
            (countMachineLearning) => countMachineLearning + 1
          );
        if (
          prijava.zelja.radionice.sveRadionice.includes(
            "Uvod u 3D Game Development"
          )
        )
          setCount3D((count3D) => count3D + 1);
        if (prijava.zelja.radionice.sveRadionice.includes("Uvod u Angular"))
          setCountRadionicaAngular(
            (countRadionicaAngular) => countRadionicaAngular + 1
          );
        if (
          prijava.zelja.radionice.sveRadionice.includes(
            "Izazovi u B2C monetizaciji 5G usluga"
          )
        )
          setCountRadionicaMonetizacija(
            (countRadionicaMonetizacija) => countRadionicaMonetizacija + 1
          );
        if (prijava.zelja.radionice.sveRadionice.includes("Spring Boot"))
          setCountRadionicaSpring(
            (countRadionicaSpring) => countRadionicaSpring + 1
          );
        if (
          prijava.zelja.radionice.sveRadionice.includes(
            "DevOps pristup razvoju softvera"
          )
        )
          setCountRadionicaDevops(
            (countRadionicaDevops) => countRadionicaDevops + 1
          );
        //tech
        if (prijava.zelja.techChallenge.kompanije.includes("Raiffeisen"))
          setCountTechRaiffeisen(
            (countTechRaiffeisen) => countTechRaiffeisen + 1
          );
        if (prijava.zelja.techChallenge.kompanije.includes("A1"))
          setCountTechA1((countTechA1) => countTechA1 + 1);
        if (prijava.zelja.techChallenge.kompanije.includes("Semos Education"))
          setCountTechSemos((countTechSemos) => countTechSemos + 1);
        if (prijava.zelja.techChallenge.kompanije.includes("Adacta"))
          setCountTechAdacta((countTechAdacta) => countTechAdacta + 1);
        if (prijava.zelja.techChallenge.kompanije.includes("Prime Software"))
          setCountTechPrime((countTechPrime) => countTechPrime + 1);
        if (prijava.zelja.techChallenge.kompanije.includes("EyeSee"))
          setCountTechEyesee((countTechEyesee) => countTechEyesee + 1);

        //speed
        if (prijava.zelja.speedDating.includes("Raiffeisen"))
          setCountSpeedRaiffeisen(
            (countSpeedRaiffeisen) => countSpeedRaiffeisen + 1
          );
        if (prijava.zelja.speedDating.includes("A1"))
          setCountSpeedA1((countSpeedA1) => countSpeedA1 + 1);
        if (prijava.zelja.speedDating.includes("Semos Education"))
          setCountSpeedSemos((countSpeedSemos) => countSpeedSemos + 1);
        if (prijava.zelja.speedDating.includes("Adacta"))
          setCountSpeedAdacta((countSpeedAdacta) => countSpeedAdacta + 1);
        if (prijava.zelja.speedDating.includes("Prime Software"))
          setCountSpeedPrime((countSpeedPrime) => countSpeedPrime + 1);
        if (prijava.zelja.speedDating.includes("EyeSee"))
          setCountSpeedEyesee((countSpeedEyesee) => countSpeedEyesee + 1);

        //panel
        if (prijava.zelja.panel.staBiCuli !== "")
          setCountPanel((countPanel) => countPanel + 1);
      });
  };

  useEffect(() => {
    prebrojLjude();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="ts-container">
      <h2 className="section-naslov">Radionice</h2>
      <div className="radionice">
        <KarticaTrenutnoStanje
          broj={countMachineLearning}
          naziv="Machine learning"
        />
        <KarticaTrenutnoStanje
          broj={count3D}
          naziv="Uvod u 3D Game Development"
        />
        <KarticaTrenutnoStanje
          broj={countRadionicaMonetizacija}
          naziv="Izazovi u B2C monetizaciji 5G usluga"
        />
        <KarticaTrenutnoStanje
          broj={countRadionicaSpring}
          naziv="Spring Boot"
        />
        <KarticaTrenutnoStanje
          broj={countRadionicaAngular}
          naziv="Uvod u Angular"
        />
        <KarticaTrenutnoStanje
          broj={countRadionicaDevops}
          naziv="DevOps pristup razvoju softvera"
        />
      </div>
      <h2 className="section-naslov">Tech Challenge</h2>
      <div className="radionice">
        <KarticaTrenutnoStanje broj={countTechRaiffeisen} naziv="Raiffeisen" />
        <KarticaTrenutnoStanje broj={countTechA1} naziv="A1" />
        <KarticaTrenutnoStanje broj={countTechSemos} naziv="Semos" />
        <KarticaTrenutnoStanje broj={countTechAdacta} naziv="Adacta" />
        <KarticaTrenutnoStanje broj={countTechPrime} naziv="Prime" />
        <KarticaTrenutnoStanje broj={countTechEyesee} naziv="Eyesee" />
      </div>
      <h2 className="section-naslov">Speed dating</h2>
      <div className="radionice">
        <KarticaTrenutnoStanje broj={countSpeedRaiffeisen} naziv="Raiffeisen" />
        <KarticaTrenutnoStanje broj={countSpeedA1} naziv="A1" />
        <KarticaTrenutnoStanje broj={countSpeedSemos} naziv="Semos" />
        <KarticaTrenutnoStanje broj={countSpeedAdacta} naziv="Adacta" />
        <KarticaTrenutnoStanje broj={countSpeedPrime} naziv="Prime" />
        <KarticaTrenutnoStanje broj={countSpeedEyesee} naziv="Eyesee" />
      </div>
      <h2 className="section-naslov">Panel</h2>
      <div className="radionice">
        <KarticaTrenutnoStanje broj={countPanel} naziv="Panel" />
      </div>
    </div>
  );
};

export default TrenutnoStanje;
