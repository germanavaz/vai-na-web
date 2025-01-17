import { useState } from "react";
import lampada from "./assets/lampada.png";
import genio from "./assets/genio.png";
import "./Style.scss";


export default function App() {

  const[aladin, setAladin] = useState(lampada);

  const mudarImagem = () => {
    setAladin(genio)
  }


  return(
    <main>
    <h1>"Liberte a magia da programação com a lâmpada de Aladim."</h1>
    <img src={aladin} alt="Imagem do gênio da lâmpada" />
    <button onClick={mudarImagem}>Clique Aqui</button>
    </main>
  )
}