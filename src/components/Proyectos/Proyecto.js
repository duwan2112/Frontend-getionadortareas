import React,{useContext} from 'react'
import ProyectoContext from '../../contexts/Proyectos/ProyectoContext'
import TareaContext from '../../contexts/tareas/TareaContext'

export default function Proyecto({proyecto}) {



         //CONTEXT PROYECTOS 
         const proyectoContext = useContext(ProyectoContext)
         const {cargarProyectoactual} = proyectoContext
    //Context Tareas
    const tareaContext = useContext(TareaContext) 
    const {formularioEditar,cargarTareas} = tareaContext
      

         //Funciona para seleccionar un proyecto 
         const onClick = ()=> {
             cargarProyectoactual(proyecto)
             cargarTareas(proyecto._id)
             formularioEditar(null)
         }
    return (
        <li>
            <button onClick={onClick} type="button" className="btn btn-blank"> {proyecto.nombre} </button>
           
        </li>
    )
}
