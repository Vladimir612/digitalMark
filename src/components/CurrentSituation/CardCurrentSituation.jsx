import React from "react";

const CardCurrentSituation = (props) => {
  return (
    <div className="cs-kartica">
      <div className="grafik">
        <div className="krug">
          <div className="procenat">
            <h2>{props.number}</h2>
          </div>
        </div>
        <h2 className="title">{props.title}</h2>
      </div>
    </div>
  );
};

export default CardCurrentSituation;
