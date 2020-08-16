import React,{useReducer} from 'react';
import TareaContext from './TareaContext'
import TareaReducer from './TareaReducer'
import clienteAxios from '../../config/clienteAxios'
import { CARGAR_TAREAS, AGREGAR_TAREA, EDITAR_TAREA, ELIMINAR_TAREA , FORMULARIO_EDITAR } from '../../types';

const TareaState = props =>  {

    const initialState = {
       tareas:[],
       mostrarformulario: null
    }
    const [state,dispatch] = useReducer(TareaReducer,initialState) 

     const cargarTareas =async proyecto => { 
        
      try {
          const response = await clienteAxios.get('/api/tareas',{params: {proyecto}}) 
          dispatch({
             type: CARGAR_TAREAS,
             payload: response.data.tareas
         })
          
      } catch (error) {
          console.log(error.response)
      }
     }
    
    const agregarTarea =async tarea => {
        try {
            const respuesta = await clienteAxios.post('/api/tareas', tarea)
          
           dispatch({
            type: AGREGAR_TAREA,
            payload: respuesta.data.tarea

        })

        } catch (error) {
            console.log(error.response)
        }
    }


    const editarTarea =async tarea => { 

        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea)
               dispatch({
            type: EDITAR_TAREA,
            payload:resultado.data.tareaExiste
        })
           
        } catch (error) {
            console.log(error.response)
        }
   
    }

    const eliminarTarea =async (id,proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`,{params: {proyecto}})
             dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        }) 
        } catch (error) {
            console.log(error)
        }
       
    }
    const formularioEditar =async tarea => {
            dispatch({
                type: FORMULARIO_EDITAR,
                payload: tarea
            })     
    }

return(
      <TareaContext.Provider value=
      {{
              tareas: state.tareas,
              mostrarformulario: state.mostrarformulario,
             cargarTareas,agregarTarea,editarTarea,eliminarTarea,formularioEditar
      }}>
           {props.children}
            </TareaContext.Provider>    
)
}

export default TareaState