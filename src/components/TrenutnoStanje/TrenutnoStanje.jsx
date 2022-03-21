import React from 'react';
import "./TrenutnoStanje.scss";


const TrenutnoStanje = () => {
  return (

  
    <body>
        <div class="ts-container">
            <div class="ts-kartica">
                <div class="grafik">
                    <div class="krug">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70" data-count="70"></circle>
                        </svg>
                        <div class="procenat">
                            <h2>70<span>%</span></h2>
                        </div>
                    </div>
                    <h2 class="naziv">Panel</h2>
                </div>  
            </div>
            <div class="ts-kartica">
                <div class="grafik">
                    <div class="krug">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="procenat">
                            <h2>85<span>%</span></h2>
                        </div>
                    </div>
                    <h2 class="naziv">Tech Challenge</h2>
                </div>  
            </div>
            <div class="ts-kartica">
                <div class="grafik">
                    <div class="krug">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div class="procenat">
                            <h2>60<span>%</span></h2>
                        </div>
                    </div>
                    <h2 class="naziv">Speed Dating</h2>
                </div>  
            </div>
        </div>
    </body>






  )
}

export default TrenutnoStanje