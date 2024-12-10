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

  // Lista de equipos:
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
]

  // Se puede usar un Operador Ternario:
  // condicion ? seMuestra : noSeMuestra;
  return (
    <div>
      <Header />  {/* Tercera forma de llamar un componente de React. */}
      { mostrarFormulario ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)} /> : <></> }
      <MiOrg cambiarMostrar={cambiarMostrar} />
      
      {/* Se crea un componente Equipo por cada objeto equipo: */}
      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} />)
      }

    </div>
  );
}

export default App;
