import './App.css';



export default function App() {
  
  const tarefas = ["Limpar a casa", "Lavar louça", "Tirar o lixo", "Lavar roupa"];
  
  const cadastro = [
    {
      img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8c/62/4d/caption.jpg?w=500&h=400&s=1",
      titulo: "Rio de Janeiro, Brasil", 
      data: "21/01", 
      preco: "R$300,00"
    }, 
    {
      img:"https://ecoadventure.tur.br/wp-content/uploads/2023/01/lencois-maranhenses-eco-adventure-tour-3-scaled.jpeg",
      titulo: "Lençóis Maranhenses, Brasil", 
      data: "25/01", 
      preco: "R$700,00" 
    },
    {
      img:"https://mobilidade.estadao.com.br/wp-content/uploads/2022/02/Salvador.jpg",
      titulo: "Salvador, Brasil", 
      data: "04/02", 
      preco: "R$500,00"
    }
  ];


  return(
    <>
    <h1>Airbnb Vai na Web</h1>

    <section>
      {cadastro.map((index) => (
        <article>
          <img src={index.img} alt="" />
          <h2>{index.titulo}</h2>
          <p>{index.data}</p>
          <p>{index.preco}</p>
        </article>
      ))}
    </section>


    {/* <h1>Tarefas Diárias</h1>
    <ul>
      {tarefas.map((index) => (
        <li>{index}</li>
      ))}
    </ul> */}
    </>

  )
}