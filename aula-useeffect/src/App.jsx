import { use } from "react";
import { useEffect, useState } from "react";



export default function App() {

  const [nome, setNome] = useState("Tá calor");

  const mudarNome = () => {
    setNome("Preciso de chuva")
  }
  
  // Assim o useEffect fica escutando todos as mudanças
  // useEffect(() => {
  //   alert("Item adicionado ao carrinho!")
  // })

  //Uso "evoluido" do useEffect - só é chamado quando abre o site
  // useEffect(() => {
  //     alert("Seja bem vindo")
  // }, [])


  const [numero, setNumero] = useState(0);

  //Versão "3" do useEffect
  useEffect(() => {
      if (numero == 5) {
        alert("Mudança captada!")
      } else {
        alert("Continue!")
      }
  }, [numero, nome])

  const mudarNumero = () => {
    setNumero(numero+1)
  }
  
  return(
    <>
    <h2>{nome}</h2>
    <button onClick={mudarNome}>mudar</button>
    <h3>{numero}</h3>
    <button onClick={mudarNumero}>Contador</button>
    </>
  )
}