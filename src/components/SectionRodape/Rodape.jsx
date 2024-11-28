import estiloRodape from "./rodape.module.css";
import Image from "next/image";
import insta from "../../../public/instagram.png"
import face from "../../../public/facebook.png"
import Link from "next/link";




export default function Rodape(){

    return(

        <section className={estiloRodape.boxRodape}>

                <div>

                    <Image
                        className={estiloRodape.Img}
                        src={insta}
                    
                    
                    />
                    <Image
                        className={estiloRodape.Img}
                        src={face}
                    />
                </div>


                

        </section>
    )

}