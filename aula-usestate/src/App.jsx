import { use } from "react"
import { useState } from "react"


export default function App(){
  // hooks
  // useState

  const[cantor, setCantor] = useState("Manoel Gomes") //Passo 1

  const mudarNome = () => {           // Passo 2
      setCantor("Roberto Carlos")
  }
  //--------------------------------------------------------------------------

  const [cor, setCor] = useState("red")

  const mudarCor = () => {
    setCor("blue")
  }

  //---------------------------------------------------------------------------

  const [like, setLike] = useState(0)

  const curtida = () => {
    setLike(like+1)
  }

  return(
    <>
    {/* Passo 3 */}
    <h2>{cantor}</h2>
    <button onClick={mudarNome}>Mudar Cantor</button>
    
    <div style={{background: cor}}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias ea corrupti, vero nisi ut.</p>
      <button onClick={mudarCor}>Mudar Cor</button>
    </div>

    <div>
      <p>likes = {like}</p>
      <button onClick={curtida}>Like</button>
    </div>
    </>
  )

}