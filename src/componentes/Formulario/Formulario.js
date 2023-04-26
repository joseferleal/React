import {useState} from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../../listaOpciones/listaOpciones"
import Boton from "../botones/boton"
const Formulario=(props)=>{

    const[nombre, actualizarNombre]=useState("")
    const[puesto, actualizarPuesto]=useState("")
    const[foto, actualizarFoto]=useState("")
    const[equipo, actualizarEquipo]=useState("Devops")
    const [titulo, actualizarTitulo]=useState("")
    const[color, actualizarColor]=useState("")
    const{registrarColaborador, crearEquipo}=props

    const manejarEnvio=(e)=>{
        e.preventDefault();
        console.log("manejar Envío")
        let datosEnviar={
            nombre:nombre,
            puesto: puesto,
            foto: foto,
            equipo:equipo
        }

        registrarColaborador(datosEnviar)
    }

    const manejarNuevoEquipo=(e)=>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario:color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo encabezado="Nombre" placeholder="Ingresa el nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <Campo encabezado="Cargo" placeholder="Ingresa el cargo" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <Campo encabezado="Foto" placeholder="Ingresa la foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones 
            valor={equipo} 
            actualizarEquipo={actualizarEquipo} 
            equipos={props.equipos}
            />
            
            <Boton> Crear </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo} >
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo 
            encabezado="Titulo" placeholder="Ingresa el título"
             required valor={titulo}
            actualizarValor={actualizarTitulo}/>
            <Campo 
            encabezado="Color" placeholder="Ingresa el color en valores hexadecimales" 
            required valor={color} 
            actualizarValor={actualizarColor}
            type="color"
            />
            
            
          

            <Boton>Registrar equipo</Boton>
            </form>
    </section>
}

export default Formulario