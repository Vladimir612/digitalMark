import React from "react";

const KarticaTrenutnoStanje = (props) => {
    return (
        <div class="ts-kartica">
            <div class="grafik">
                <div class="krug">
                    <div class="procenat">
                        <h2>{props.broj}</h2>
                    </div>
                </div>
                <h2 class="naziv">{props.naziv}</h2>
            </div>
        </div>
    );
};

export default KarticaTrenutnoStanje;
