import estiloCafe from "./sectioncafe.module.css";




export default function SectionCafe(){

    return(

        <section className={estiloCafe.boxImgFundo}>

            <div className={estiloCafe.Texto}>

                <h1>CODE COM O MELHOR CAFÉ DA REGIÃO</h1>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam alias distinctio neque impedit. Quod temporibus omnis molestias id, cumque consequuntur porro mollitia libero ipsam atque amet hic fugit rem molestiae?</p>

                <button>Pegue o seu agora</button>


            </div>

        </section>
    )

}