import estiloTopo from "./topo.module.css";
import Image from "next/image";
import Logo from "../../../public/logo.png"
import Lupa from "../../../public/pesquisa.png"
import Carrinho from "../../../public/carrinho.png"






export default function Topo(props) {



    return (


        <section className={estiloTopo.boxMaior}>

            <section className={estiloTopo.boxPai} onClick={props.clickOut}>

                <Image src={Logo} alt="Logo" />

                <div className={estiloTopo.boxNav}>

                    <nav className={estiloTopo.Nav}>

                        <ul>

                            {
                                props.naveg.map((naveg, index) =>

                                    <li key={index}>{naveg}</li>
                                )

                            }
                        </ul>

                    </nav>



                </div>

                <div className={estiloTopo.boxImage}>




                    <Image onClick={props.clickModal} className={estiloTopo.Icon} src={Lupa} alt="lupa-imagem" />







                    <Image className={estiloTopo.Icon} src={Carrinho} alt="carrinho-imagem" />

                </div>




            </section>

            
            <div className={estiloTopo.NavEscondida}>

                            <nav>
                                <ul>
                                    <li>Inicio</li>
                                    <li>Sobre</li>
                                    <li>Menu</li>
                                    <li>Avaliações</li>
                                    <li>Endereço</li>
                                </ul>
                            </nav>

            </div>


        </section>







    )

}