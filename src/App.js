import "./styles.css";
import data from "./ava.js"; //importa el default como data

export default function App() {
  let random = Math.floor(Math.random() * data.length); //calcula un valor aleatorio

  return (
    //usa expresiones de JSX para mostrar un elementos aleatorios
    <div className="fondo">
      <div className="App">
        <h1>{data[random].name}</h1>
        <h3>{data[random].planet}</h3>
        <ul>
          <li>{data[random].text}</li>
        </ul>
        <img src="https://api.minimalavatars.com/avatar/random/png" alt="marciano"/>
      </div>
    </div>
  );
}
