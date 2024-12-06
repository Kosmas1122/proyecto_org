import { useState } from "react";
import './App.css';

/* Importación de Componentes: */
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  // Se puede usar un Operador Ternario:
  // condicion ? seMuestra : noSeMuestra;
  return (
    <div>
      <Header />  {/* Tercera forma de llamar un componente de React. */}
      { mostrarFormulario ? <Formulario /> : <></> }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      <Equipo equipo="Programación" />
      <Equipo equipo="Front End" />
      <Equipo equipo="Data Science" />
      <Equipo equipo="Devops" />
      <Equipo equipo="UX y Diseño" />
    </div>
  );
}

export default App;
