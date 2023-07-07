import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  function aumentarClic(){
    setNumClics(numClics + 1);
  }

  function disminuirClic(){
    setNumClics(numClics - 1);
  }

  function reiniciarContador(){
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='+ Aumentar'
          esBotonDeClic={true}
          manejarClic={aumentarClic} />
        <Boton 
          texto='- Disminuir'
          esBotonDeClic={true}
          manejarClic={disminuirClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
