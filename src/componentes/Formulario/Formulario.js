import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton";

const Formulario = (props) => {

    /* Estados: */
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");


    // Ejemplo de Destructuración:
    const {registrarColaborador, crearEquipo}= props

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar el envío");

        // Se crea un objeto para guardar los datos del formulario:
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        };
        //console.log(datosAEnviar);
        registrarColaborador(datosAEnviar);

        /* El objeto anterior también se pudo haber escrito así:
            let datosAEnviar = {
                nombre,
                puesto,
                foto
            };

            Internamente JS sabe que la clave y el valor tendrán
            el mismo nombre.
        */
    };


    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    };


    return <section className="formulario"> 
        {/* Formulario para Colaboradores: */}
        <form onSubmit={manejarEnvio}>
            <h2> Rellena el formulario para crear el colaborador. </h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required={true} 
                valor={nombre} 
                actualizarValor={setNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto} 
                actualizarValor={setPuesto}
            /> 
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto} 
                actualizarValor={setFoto}
            />
            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={setEquipo}
                equipos = {props.equipos}
            />
            <Boton texto="Crear"/>
        </form>

        {/* Formulario para Equipos: */}
        <form onSubmit={manejarNuevoEquipo}>
            <h2> Rellena el formulario para crear el equipo. </h2>
            <Campo 
                titulo="Título" 
                placeholder="Ingresar título" 
                required={true} 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en hex" 
                required 
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton texto="Registrar Equipo"/>
        </form>
    </section>
};

export default Formulario;