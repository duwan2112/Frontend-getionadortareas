import React,{useContext,useState} from 'react'
import ProyectoContext from '../../contexts/Proyectos/ProyectoContext'
import AlertaContext from '../../contexts/Alertas/AlertaContext'
import TareaContext from '../../contexts/tareas/TareaContext'
export default function NuevosProyectos() {

    //Context Proyectos
    const proyectoContext = useContext(ProyectoContext)
    const {estadoformulario,activarFormulario,agregarProyecto} = proyectoContext
    //Context Alertas 
    const alertaContext = useContext(AlertaContext) 
    const {alerta,mostrarAlerta} = alertaContext
        //Context Tareas
        const tareaContext = useContext(TareaContext) 
        const {formularioEditar} = tareaContext
          
    
    //Estado del formulario 
    const [formulario,setFormulario] = useState({nombre: ''})

    //Funcion para activar o desactivar el formulario 
    const EstadoFormulario = () => {
        formularioEditar(null)
        activarFormulario(!estadoformulario)
    }

    //Funcion para alterar el estado del formulario 
    const onChange = e => {
      return setFormulario({...formulario, [e.target.name]: e.target.value})
    }
    //Funcion para agregar proyectos 
    const onSubmit = e => {
        e.preventDefault()
        formularioEditar(null)
        if(formulario.nombre.trim()){
           agregarProyecto(formulario) 
           activarFormulario(false)
           setFormulario({nombre: ''})  
        return
        }
        mostrarAlerta({msg:'Debe rellenar todos los campos',categoria:'alerta-error'})
       

    }
    return (
       <> 
        {alerta ? <p className={`alerta ${alerta.categoria}`}>{alerta.msg}</p> : null}
           <button onClick={EstadoFormulario} type="button" className="btn btn-block btn-primario"> Nuevo Proyecto  </button>
           {estadoformulario ? ( <form onSubmit={onSubmit} className="formulario-nuevo-proyecto" action=""> 
           <input onChange={onChange} type="text" name="nombre" value={formulario.nombre} className="input-text" placeholder="Nuevo Proyecto" />
           <input type="submit" value="Crear Proyecto" className="btn btn-block btn-primario"/>
          </form>) : null }
         
       
       
         </> 
    )
}
