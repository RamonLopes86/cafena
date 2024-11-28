import estilomenu from "./menu.module.css";
import Card from "../Card/card";

import React from "react";




export default function Menu(props){

  



    return(
        <section className={estilomenu.boxMaior}>

            <h1><span>NOSSO</span> MENU</h1>

                <div className={estilomenu.boxCard}>

                    {

                        props.card.map((card)=>
                        
                            <Card
                            
                            img={card.img}
                            titulo={card.titulo}
                            precoMaior={card.precoMaior}
                            precoMenor={card.precoMenor}
                            botao={card.botao}


                            />
                        )
                            
                    }

                    <p className={props.status}>ITEM NÃO ENCONTRADO</p>
                            
                        
                </div>
                        
        </section>
)

}


