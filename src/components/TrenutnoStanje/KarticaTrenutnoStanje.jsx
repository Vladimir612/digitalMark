import React from "react";

const KarticaTrenutnoStanje = (props) => {
  return (
    <div className="ts-kartica">
      <div className="grafik">
        <div className="krug">
          <div className="procenat">
            <h2>{props.broj}</h2>
          </div>
        </div>
        <h2 className="naziv">{props.naziv}</h2>
      </div>
    </div>
  );
};

export default KarticaTrenutnoStanje;
