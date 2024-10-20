import "./App.css";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div className="App">
      <h1>{contador}</h1>
      <button onClick={adicionarContador}>incrementar</button>
    </div>
  );
}

export default App;
