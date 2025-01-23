import { useState } from 'react';
import './Style.scss';

export default function App() {
  const [verde, setVerde] = useState("#555");

  const mudarVerde = () => {
    if (verde == '#555') {
      setVerde("green")
      setAmarelo("#555")
      setVermelho("#555")
    } else {
      setVerde('#555')
    }
  }

  const [amarelo, setAmarelo] = useState("#555");

  const mudarAmarelo = () => {
    if (amarelo == '#555') {
      setAmarelo("yellow")
      setVerde('#555')
      setVermelho("#555")
    } else {
      setAmarelo('#555')
    }
  }

  const [vermelho, setVermelho] = useState("#555");

  const mudarVermelho = () => {
    if (vermelho == "#555") {
      setVermelho("red") 
      setVerde('#555')
      setAmarelo("#555")
    } else {
      setVermelho("#555")
    }
  }


  return(
    <main>
      {/* Sinal */}
      <div className='sinal'>
        <div className="luz" style={{backgroundColor: verde}}></div>
        <div className="luz" style={{backgroundColor: amarelo}}></div>
        <div className="luz" style={{backgroundColor: vermelho}}></div>
      </div>

      <div className='botoes'>
        <button className='verde-btn' onClick={mudarVerde}>Verde</button>
        <button className='amarelo-btn' onClick={mudarAmarelo}>Amarelo</button>
        <button className='vermelho-btn' onClick={mudarVermelho}>Vermelho</button>
      </div>
    </main>
  )
}