import "./miOrg.css"
import{useState} from "react"

const MiOrg=(props)=>{

    //Estado-hooks
    //useSate()
    //const[nombreVariable, funcionActualiza]=useState(valorInicial)
    /* const[nombre, actualizarNombre]= useState("Harland") */
    console.log(props)
    /* const [mostrar, actualizarMostrar]=useState(true)
    const manejarClick=()=>{
        console.log("Mostrar/ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar)
    } */


    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="botón agregar" onClick={props.cambiarMostrar}></img>
    </section>
}


export default MiOrg