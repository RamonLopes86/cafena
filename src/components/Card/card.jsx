import estiloCard from "./card.module.css";
import Image from "next/image";



export default function Card(props){

    return(

            <section className={estiloCard.Moldura}>

                <div className={estiloCard.boxFilho}>

                    <Image className={estiloCard.imgCard} src={props.img}/>
                    <h4>{props.titulo}</h4>

                    <p>R$ {props.precoMaior} <sub>R$ {props.precoMenor}</sub></p>

                    <button>{props.botao}</button>
                </div>

            </section>


    )


}