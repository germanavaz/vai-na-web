import { useState, useEffect } from "react";
import axios from 'axios';


export default function App() {
  

  //comentário p pesquisar: contexto para levar os dados de um lado para outro 
  const [produto, setProduto] = useState([]);
  
  const pegarDados = async () => {

    const dados = await axios.get("https://fakestoreapi.com/products")

    setProduto(dados.data)

  }

  useEffect(() => {
    pegarDados()
  }, [])

  return(
    <>
    Boa tarde!!!
    </>
  )
}