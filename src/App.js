import { useState } from "react";
import './App.css';

/* Importación de Componentes: */
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  // Se puede usar un Operador Ternario:
  // condicion ? seMuestra : noSeMuestra;
  return (
    <div>
      <Header />  {/* Tercera forma de llamar un componente de React. */}
      { mostrarFormulario ? <Formulario /> : <></> }

      {/* También se puede hacer usando el concepto de corto circuito: */}
      {/* { mostrarFormulario && <Formulario /> } */}


      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
