import S from "./Style.module.scss";
import imagem from "../assets/imagemAnoNovo.png"

export default function Main() {
    return(
        <main>
            <img src={imagem} alt="" />
            <section className={S.boasFestas}>
                <h3>Boas Festas!!!</h3>
                <h2>Felicidades!!!</h2>
                <section className={S.poema}>
                    <p>Em 2025, vamos juntos programar,</p>
                    <p>Com mais código limpo e muito para alcançar!</p>
                    <p>Que o ano novo traga só funções de felicidade,</p>
                    <p>E que a paz seja nossa variável de realidade!</p>
                    <p>Sem bugs, sem falhas, com muito amor,</p>
                    <p>Vamos debugar os problemas com ardor!</p>
                    <p>Que a vida seja sempre o output de alegria,</p>
                    <p>O Vai Na Web te deseja um Ano Novo, que seja</p> 
                    <p>pura harmonia!</p>
                </section>
            </section>
        </main>
    )
}