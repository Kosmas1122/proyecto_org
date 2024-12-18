import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
    
    // Destructuración:
    const {type="text"} = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label> {props.titulo} </label>
        <input 
            placeholder={`${props.placeholder}...`} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
            type={type}
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

export default Campo;