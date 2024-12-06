import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
    //const [valor, setValor] = useState("");
    //console.log("Datos: ", props);

    const manejarCambio = (e) => {
        //console.log("Cambio", e.target.value);
        props.actualizarValor(e.target.value);
    }

    return <div className="campo-texto">
        <label> {props.titulo} </label>
        <input 
            placeholder={`${props.placeholder}...`} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
        />
    </div>
};

/* 
NOTA:
Se acostumbra usar como nombre de función para 
el estado, la palabra set+nombreVariable, así:
const [valor, setValor] = ...
Puede usarse cualquier nombre, pero lo anterior
es una costumbre dentro del desarrollo en React.
*/

export default CampoTexto;