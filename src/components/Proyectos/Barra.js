import React,{useContext} from 'react'
import RegistroContext from '../../contexts/Registro/RegistroContext'
import TareaContext from '../../contexts/tareas/TareaContext'
export default function Barra() {

     // Context de Registro 
     const registroContext = useContext(RegistroContext) 
     const {cerrarSesion,usuario} = registroContext

         //Context Tareas
    const tareaContext = useContext(TareaContext) 
    const {formularioEditar} = tareaContext
      
    //Funcion para cerrar seccion 
    const onClick = ()=> {
      cerrarSesion()
      formularioEditar(null)
    }

    return (
        <header className="app-header"> 
              <p className="nombre-usuario"> Hola <span> {usuario ? `${usuario.nombre}` : null} </span></p> 
              <nav className="nav-principal">

                 <button onClick={onClick} className="btn btn-blank cerrar-sesion"> Cerrar Seccion</button>

              </nav>

        </header>
    )
}
