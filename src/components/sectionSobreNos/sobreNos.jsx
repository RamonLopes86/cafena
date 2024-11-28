import estiloNos from "./sobrenos.module.css";
import Image from "next/image";
import cafe from "../../../public/about-img.jpg"




export default function SobreNos(){

    return(

        <section className={estiloNos.boxPai}>

            <h1><span>SOBRE</span> NÓS</h1>


            <div className={estiloNos.boxMaior}>

                {/* <div className={estiloNos.boxImg}>

                    <Image className={estiloNos.ImgCafe} src={cafe}/>

                </div> */}

                <Image className={estiloNos.ImgCafe} src={cafe}/>

                <div className={estiloNos.boxTexto}>

                    <h3>O QUE FAZ O NOSSO CAFÉ ESPECIAL</h3>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quasi at earum, temporibus facere repellendus modi ratione quam eaque accusantium asperiores eligendi dolore necessitatibus magnam animi dolorem alias harum? Maxime.</p>


                    <button>Saiba mais</button>

                </div>

            </div>



        </section>

    )
}