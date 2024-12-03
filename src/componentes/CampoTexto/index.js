import "./CampoTexto.css";

const CampoTexto = (props) => {
    console.log("Datos: ", props);
    return <div className="campo-texto">
        <label> {props.titulo} </label>
        <input placeholder={`${props.placeholder}...`} required={props.required} />
    </div>
};

export default CampoTexto;