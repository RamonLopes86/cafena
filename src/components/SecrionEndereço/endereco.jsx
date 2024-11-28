import estiloEnd from "./endereco.module.css";


export default function Endereco(){
    return(
        <section className={estiloEnd.boxPai}>

              
                    <div className={estiloEnd.boxIframe}>

                        
                        <iframe className={estiloEnd.Mapa} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.578925883614!2d-38.47965781284178!3d-12.9785843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161bdcd3bf77a1%3A0x731826b22bd21a89!2sKoalas%20Caf%C3%A9%20e%20Bistr%C3%B4%20%7C%20Cafeteria%20%7C%20Delivery%20%7C%20Mundo%20Plaza%20%7C%20Salvador!5e0!3m2!1spt-BR!2sbr!4v1721927445129!5m2!1spt-BR!2sbr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0"></iframe>

                    </div>




        </section>
    )
}