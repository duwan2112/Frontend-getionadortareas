import React,{useContext} from 'react'
import TareaContext from '../../contexts/tareas/TareaContext'
import ProyectoContext from '../../contexts/Proyectos/ProyectoContext'
export default function Tarea({tarea}) {


    //Context Tareas
      const tareaContext = useContext(TareaContext) 
      const {mostrarformulario,editarTarea,eliminarTarea,formularioEditar} = tareaContext
           

    //Context Proyecto   
     const proyectoContext = useContext(ProyectoContext)
     const {proyectoactual} = proyectoContext
     //Editar estado 
     const onClickEstado = () => {
       
           tarea = {...tarea, estado: !tarea.estado}
         editarTarea(tarea) 
         formularioEditar(null)
     }
     //Eliminar tarea

     const onClickEliminar = () => {
          eliminarTarea(tarea._id,proyectoactual._id) 
          formularioEditar(null)
 }
 
     //Editar Tarea
     const onClickEditar = () => {
        if(mostrarformulario === null){
          return  formularioEditar(tarea)
        }
         formularioEditar(null)
    }
     
    return (
        <> 
      
        <li className="tarea sombra"> 
        <p>{tarea.nombre}</p>
        <div className="estado"> 
        {tarea.estado
              ? <button onClick={onClickEstado} type="button" className="completo">Completo</button> 
              
              :  <button onClick={onClickEstado} type="button" className="incompleto">Incompleto</button>  }
             
    </div>
    <div className="acciones">
    <button onClick={onClickEditar} type="button" className="btn btn-primario"> Editar</button>
               <button onClick={onClickEliminar} type="button" className="btn btn-secundario"> Eliminar</button>
             
    </div>

        </li>
        </> 
    )
}
