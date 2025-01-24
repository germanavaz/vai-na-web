import { useState, useEffect } from "react";
import axios from 'axios';



export default function App() {

  const [desenho, setDesenho] = useState([]);

  const pegarDados = async () => {

    const dados = await axios.get('https://api.sampleapis.com/rickandmorty/characters')
    setDesenho(dados.data[0])
  }

  useEffect(()=>{
    pegarDados()
  }, [])

  return(
    <>
    <h1>API</h1>
    <h2>Application Programing Interface /  Interface de Programação de Aplicações</h2>
    <article>
      <img src={desenho.image} alt=""/>
      <h2>{desenho.name}</h2>
    </article>

    </>
  )
}