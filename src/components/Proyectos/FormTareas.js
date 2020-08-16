import React,{useState,useContext,useEffect} from 'react'
import AlertaContext from '../../contexts/Alertas/AlertaContext'
import TareaContext from '../../contexts/tareas/TareaContext'
import ProyectoContext from '../../contexts/Proyectos/ProyectoContext'

export default function FormTareas() {

   const [formulario,setFormulario] = useState({nombre: '' ,estado:false, idproyecto: '',id: '' })


       //Context Alertas 
       const alertaContext = useContext(AlertaContext) 
       const {alerta,mostrarAlerta} = alertaContext
        
    //Context tareas 
     const tareaContext = useContext(TareaContext)
     const {agregarTarea,mostrarformulario,editarTarea,formularioEditar} = tareaContext

    
     //Context Proyectos 
     const proyectosContext = useContext(ProyectoContext)
     const {proyectoactual} = proyectosContext
  
    useEffect(()=>{
        if(proyectoactual){
           return  setFormulario({...formulario, idproyecto: proyectoactual.id}) 
        }
        setFormulario({...formulario, idproyecto: ''}) 
        

        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[proyectoactual])
   const onChange = e => {
       return setFormulario({...formulario,[e.target.name]: e.target.value})
   }

   const onSubmit = e => { 
       e.preventDefault()
    if(!proyectoactual){
           return mostrarAlerta({msg:'Seleccione un proyecto',categoria:'alerta-error'})
      }
      else if(!formulario.nombre.trim()){
          return  mostrarAlerta({msg:'Debe rellenar todos los campos',categoria:'alerta-error'})
      }


     if(mostrarformulario !== null){
       
         const tareaeditada = {...mostrarformulario,nombre: formulario.nombre}
        editarTarea(tareaeditada)
        formularioEditar(null)
        setFormulario({
            nombre: '' ,estado:false, idproyecto: '' ,id:''
        })
        return
     }
        
  
    agregarTarea({nombre: formulario.nombre,proyecto: proyectoactual._id})
    setFormulario({
        nombre: '' ,estado:false, idproyecto: '' , id:''
    })
 
   }
   
    return (
        <> 

          <div className="formulario">
           {alerta ? <p className={`alerta ${alerta.categoria}`}>{alerta.msg}</p> : null}
               <form onSubmit={onSubmit}>
                   <div className="contenedor-input">
                       <input type="text" onChange ={onChange} name="nombre" value={formulario.nombre} className="input-text" placeholder={`${mostrarformulario ? "Editar" : "Agregar" } una Tarea`}/>

                   </div>
                   <div className="contenedor-input">
                       <input type="submit" className="btn btn-primario btn-block btn-submit" value={`${mostrarformulario ? "Editar" : "Agregar" }  Tarea`}/>
                       
                   </div>
               </form>
           </div>
          
         
        
         </> 
    )
}
