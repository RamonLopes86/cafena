import estiloModal from "./modal.module.css";
import Card from "../Card/card";


export default function Modal(props){

   let status = props.statusModal

   let fixed= estiloModal.Fixed;

   let noFixed = estiloModal.noFixed;

    

    

    if(status){


        return(

            <section className={`${estiloModal.boxModal} ${status === true ? fixed : noFixed} `} ref={props.referencia}>
    
                    <button onClick={props.clickModal} className={estiloModal.Fechar}>x</button>
    
                    <div className={estiloModal.modalFilho}>
    
                        <h1><span>PESQUISE</span> O MENU</h1>
    
                        <div>
                            <form action="#">
                                    <input onChange={props.change} value={props.txInput} type="text" name="pesquisar" id="idPesquisar" autoComplete="off" placeholder="Digite..."/>
                            </form>
                        </div>
    
                    </div>

                   
                        
    
    
            </section>
    
        )




    }


   


}