import { useState } from "react";
import './App.css';

/* Importación de Componentes: */
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      equipo: "Front End",
      foto: "https://github.com/kosmas1122.png",
      nombre: "David",
      puesto: "Desarrollador"
    },
    {
      equipo: "Front End",
      foto: "https://github.com/kosmas1122.png",
      nombre: "Luke",
      puesto: "Desarrollador"
    },
    {
      equipo: "Front End",
      foto: "https://github.com/kosmas1122.png",
      nombre: "María",
      puesto: "Desarrolladora"
    },
    {
      equipo: "Devops",
      foto: "https://github.com/kosmas1122.png",
      nombre: "Carlitos",
      puesto: "Devops"
    },
    {
      equipo: "Data Science",
      foto: "https://github.com/kosmas1122.png",
      nombre: "Sarah",
      puesto: "Analista de Datos"
    },
    {
      equipo: "UX y Diseño",
      foto: "https://github.com/kosmas1122.png",
      nombre: "Diana",
      puesto: "Desarrolladora"
    }
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  // Registrar colaborador:
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador: ", colaborador);
    // Spread Operator:
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  // Eliminar Colaborador:
  const eliminarColaborador = () => {
    console.log("Eliminar Colaborador.");
  }

  // Actualizar color de equipo:
  const actualizarColor = (color, titulo) => {
    console.log("Actualizar: ", color, titulo);
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
      { mostrarFormulario ? <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador} 
          /> : <></> }
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      
      {/* Se crea un componente Equipo por cada objeto equipo: */}
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          />
        )
      }

      <Footer />

    </div>
  );
}

export default App;
