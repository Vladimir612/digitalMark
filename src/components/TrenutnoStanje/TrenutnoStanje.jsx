import React from "react";
import KarticaTrenutnoStanje from "./KarticaTrenutnoStanje";
import "./TrenutnoStanje.scss";

const TrenutnoStanje = (props) => {
    return (
        <div class="ts-container">
            <h2 className="section-naslov">Radionice</h2>
            <div className="radionice">
                <KarticaTrenutnoStanje broj={100} naziv="A1" />
                <KarticaTrenutnoStanje broj={100} naziv="Raiffeisen" />
                <KarticaTrenutnoStanje broj={100} naziv="Semos" />
                <KarticaTrenutnoStanje broj={100} naziv="Panel" />
                <KarticaTrenutnoStanje broj={100} naziv="Panel" />
                <KarticaTrenutnoStanje broj={100} naziv="Panel" />
            </div>
            <h2 className="section-naslov">Tech Challenge</h2>
            <div className="radionice">
                <KarticaTrenutnoStanje broj={100} naziv="Panel" />
                <KarticaTrenutnoStanje broj={100} naziv="Panel" />
                <KarticaTrenutnoStanje broj={100} naziv="Panel" />
                <KarticaTrenutnoStanje broj={100} naziv="Panel" />
                <KarticaTrenutnoStanje broj={100} naziv="Panel" />
                <KarticaTrenutnoStanje broj={100} naziv="Panel" />
            </div>
        </div>
    );
};

export default TrenutnoStanje;
