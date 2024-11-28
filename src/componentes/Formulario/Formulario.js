import "./Formulario.css";
import CampoTexto from "../CampoTexto";

const Formulario = () => {
    return <section> 
        <form className="formulario">
            <h2> Rellena el formulario para crear el colaborador. </h2>
            <CampoTexto />
            <CampoTexto />
            <CampoTexto />
        </form>
    </section>
};

export default Formulario;