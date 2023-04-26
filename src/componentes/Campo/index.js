import {useState} from "react"
import "./Campo.css"

const Campo=(props)=>{

//Desestructuración

const{type}=props
    

    const manejarCambio=(e)=>{
       
        props.actualizarValor(e.target.value)
    }    
    return<div className={`campo campo-${type}`}>
        <label>{props.encabezado.toUpperCase()}</label>
        <input     
        
            placeholder={props.placeholder+"..."} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
           
        </div>
}


export default Campo