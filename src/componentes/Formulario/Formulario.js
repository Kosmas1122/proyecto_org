import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton";

const Formulario = () => {

    /* Estados: */
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");


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
        console.log(datosAEnviar);

        /* El objeto anterior también se pudo haber escrito así:
            let datosAEnviar = {
                nombre,
                puesto,
                foto
            };

            Internamente JS sabe que la clave y el valor tendrán
            el mismo nombre.
        */
    }

    return <section className="formulario"> 
        <form onSubmit={manejarEnvio}>
            <h2> Rellena el formulario para crear el colaborador. </h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required={true} 
                valor={nombre} 
                actualizarValor={setNombre}
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto} 
                actualizarValor={setPuesto}
            /> 
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto} 
                actualizarValor={setFoto}
            />
            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={setEquipo}
            />
            <Boton texto="Crear"/>
        </form>
    </section>
};

export default Formulario;