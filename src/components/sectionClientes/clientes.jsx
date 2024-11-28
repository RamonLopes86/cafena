import estiloCliente from "./clientes.module.css";
import Image from "next/image";
import aspas from "../../../public/quote-img.png"
import cliente1 from "../../../public/pic-1.png"
import cliente2 from "../../../public/pic-2.png"
import cliente3 from "../../../public/pic-3.png"
import estrela from "../../../public/estrela.png"
import meiaEstrela from "../../../public/meia-estrela.png"



export default function Clientes(){

    return(

        <section className={estiloCliente.boxMaior}>

            <h1><span>NOSSOS</span> CLIENTES</h1>

            <section className={estiloCliente.boxPai}>
            
                    <div className={estiloCliente.Moldura}>
                        <Image className={estiloCliente.imgAspas} src={aspas}/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugit quisquam sapiente. Necessitatibus suscipit blanditiis tenetur excepturi ea praesentium dignissimos reiciendis aliquam? Dignissimos repellendus doloremque rem facere vitae nostrum quasi.</p>
                        <Image className={estiloCliente.imgCliente} src={cliente1}/>
                        <h4>João Pedro Ribeiro</h4>
                        <div className={estiloCliente.Estrelas}>
                            <Image className={estiloCliente.imgStar} src={estrela}/>
                            <Image className={estiloCliente.imgStar} src={estrela}/>
                            <Image className={estiloCliente.imgStar} src={estrela}/>
                            <Image className={estiloCliente.imgStar} src={estrela}/>
                            <Image className={estiloCliente.imgStar} src={meiaEstrela}/>
                        </div>
                    </div>
                    <div className={estiloCliente.Moldura}>
                        <Image className={estiloCliente.imgAspas} src={aspas}/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugit quisquam sapiente. Necessitatibus suscipit blanditiis tenetur excepturi ea praesentium dignissimos reiciendis aliquam? Dignissimos repellendus doloremque rem facere vitae nostrum quasi.</p>
                        <Image className={estiloCliente.imgCliente} src={cliente2}/>
                        <h4>Marcela Moraes</h4>
                        <div className={estiloCliente.Estrelas}>
                        <Image className={estiloCliente.imgStar} src={estrela}/>
                        <Image className={estiloCliente.imgStar} src={estrela}/>
                        <Image className={estiloCliente.imgStar} src={estrela}/>
                        <Image className={estiloCliente.imgStar} src={estrela}/>
                        <Image className={estiloCliente.imgStar} src={estrela}/>
                        </div>
                    </div>
                    <div className={estiloCliente.Moldura}>
                        <Image className={estiloCliente.imgAspas} src={aspas}/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugit quisquam sapiente. Necessitatibus suscipit blanditiis tenetur excepturi ea praesentium dignissimos reiciendis aliquam? Dignissimos repellendus doloremque rem facere vitae nostrum quasi.</p>
                        <Image className={estiloCliente.imgCliente} src={cliente3}/>
                        <h4>Guilherme Pinheiro</h4>
                        <div className={estiloCliente.Estrelas}>
                        <Image className={estiloCliente.imgStar} src={estrela}/>
                        <Image className={estiloCliente.imgStar} src={estrela}/>
                        <Image className={estiloCliente.imgStar} src={estrela}/>
                        <Image className={estiloCliente.imgStar} src={meiaEstrela}/>
                        <Image className={estiloCliente.imgStar} src={meiaEstrela}/>
                        </div>
                    </div>
            </section>
        </section>
    )
}