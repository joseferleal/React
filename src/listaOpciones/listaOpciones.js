
import React from "react"
import "./listaOpciones.css"
const ListaOpciones=(props)=>{
    //Método map: arreglo.map((equipo, index)=>{return<option/>})//

  /*  const equipos=["Programación","Front end","Data Science","Devops",
    "UX y diseño","Móvil","Innovación y gestión"]; */
    

    const manejarCambio=(e)=>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    } 
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
           <option
           value=""
           disabled
           defaultValue=""
           hidden
           > Seleccionar equipo</option> 

          {props.equipos.map((equipo, index)=>{
                return <option key={index} value={equipo}>{equipo}
                {/* más sencillo equipos.map((equipo, index)=> <option key={index}>{equipo} */  }
                </option>
          })
          
         
            }

        </select>
    </div>
}

export default ListaOpciones;


 /*   <option>Programación</option>
            <option>Front end</option>
            <option>Data Science</option>
            <option>Devops</option>
            <option>UX y diseño</option>
            <option>Móvil</option>
            <option>Innovación y gestión</option> */