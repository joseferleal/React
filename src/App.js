/* import logo from './logo.svg'; */
import { useState } from "react";
import {v4 as uuid} from "uuid";
import "./App.css";
import Encabezado from "./componentes/Encabezado/encabezado.js";
import Formulario from "./componentes/Formulario/Formulario.js";
import MiOrg from "./componentes/miOrg";
import Equipo from "./componentes/equipo";
import Footer from "./componentes/footer";
function App() {
  /*Todo lo que se suba acá se interpreta como JS */
  /* let suma=3+8 */

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores]=useState([{
    id:uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:true
  },
  { id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:false
  },
  { id:uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:true
  },
  { id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav:true
  },
  { id:uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav:true
  }])
  const [equipos, actualizarEquipo]=useState([
    {
      id:uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#d9f7e9",
    },
    { id:uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    { id:uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    { id:uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    { id:uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },

    { id:uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },

    { id:uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "##FF8A29",
      colorSecundario: "##FFEEDF",
    },
  ])
 

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador]) /*Los tres puntos son para copiar un arreglo que ya existe*/
  };

//Eliminar colaborador

const eliminarColaborador=(id)=>{
  console.log("Eliminar colaborador", id)
  const nuevosColaboradores=colaboradores.filter((colaborador)=>colaborador.id !==id)
  actualizarColaboradores(nuevosColaboradores)
}


  //Actualizar color de equipo
  const actualizarColor=(color, id)=>{
    console.log("actualizar color", color, id)
    const equiposActualizados=equipos.map((equipo)=>{
      if(equipo.id===id){
        equipo.colorPrimario=color
      }
      return equipo
    })


    actualizarEquipo(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo=(nuevoEquipo)=>{
    console.log(nuevoEquipo)
    actualizarEquipo([...equipos, {...nuevoEquipo, id:uuid()}])
  }

  const like=(id)=>{
    console.log("like", id)
    const colaboradoresActualizados=colaboradores.map((colaborador)=>{
      if(colaborador.id===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  //Lista de equipos

  return (
    <div /* className="App" */>
      {/*  {3+5  /*Todo lo que se escriba acá es JS*/}
      {/*  {suma} */}

      {/* Formas de llamar un componente en React */}
      {/* {Encabezado()}
     <Encabezado></Encabezado> */}
      <Encabezado />
      {/* {mostrarFormulario===true? <Formulario/>:<div></div>} */}
      {mostrarFormulario && (
        <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />
      )}
      {/* alternativa (cortocircuito):
condicion && seMuestra */}
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
      {/* <Equipo equipo="Programación"></Equipo>
     <Equipo equipo="Front end"></Equipo>
     <Equipo equipo="Data Science"></Equipo>
     <Equipo equipo="Devops"></Equipo>
     <Equipo equipo="UX y Diseño"></Equipo> */}
      {equipos.map((equipo) => {
        return <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />;
      })}
     <Footer/>
    </div>
  );
}



export default App;
 /* 
     PROPIEDADES POR DEFECTO DE REACT
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo con React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
      </header> */