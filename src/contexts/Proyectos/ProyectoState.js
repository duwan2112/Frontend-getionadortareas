import React,{useReducer} from 'react';
import ProyectoContext from './ProyectoContext'
import ProyectoReducer from './ProyectoReducer'
import clienteAxios from '../../config/clienteAxios'
import { ACTIVAR_FORMULARIO, AGREGAR_PROYECTO, CARGAR_PROYECTOS,CARGAR_PROYECTOACTUAL, ELIMINAR_PROYECTO } from '../../types';


const ProyectoState = props =>  {



    const initialState = {
        estadoformulario: false,
        proyectos: [],
        error: false,
        proyectoactual: null
    }
    const [state,dispatch] = useReducer(ProyectoReducer,initialState) 


    const eliminarProyecto =async proyecto => {
        try {
            const respuesta = await clienteAxios.delete(`/api/proyectos/${proyecto._id}`)
            dispatch({
              type: ELIMINAR_PROYECTO,
              payload: respuesta.data
          })
          
        } catch (error) {
            console.log(error)
        }
          
    }

    const cargarProyectos =async () => {
        try {
            const respuesta = await clienteAxios.get('/api/proyectos')

        dispatch({
            type: CARGAR_PROYECTOS,
            payload: respuesta.data.proyectos
        })
        } catch (error) {
            console.log(error.response)
        }
        
    }
    const activarFormulario = estado => { 
       dispatch({
           type: ACTIVAR_FORMULARIO,
           payload: estado
       })
    }
    const agregarProyecto =async proyecto => { 
        try {
            const respuesta = await clienteAxios.post('/api/proyectos',proyecto)
            dispatch({
            type: AGREGAR_PROYECTO,
            payload: respuesta.data
        })
        } catch (error) {
            console.log(error.response)
        }
    }

    const cargarProyectoactual = proyecto => {
        dispatch({
            type: CARGAR_PROYECTOACTUAL,
            payload: proyecto

        })
    }
  

return(
      <ProyectoContext.Provider value=
      {{
          estadoformulario: state.estadoformulario,
          proyectos: state.proyectos,
          proyectoactual: state.proyectoactual,
          activarFormulario,
          agregarProyecto,
          cargarProyectos,
          cargarProyectoactual,
          eliminarProyecto
      }}>
           {props.children}
            </ProyectoContext.Provider>    
)
}



export default ProyectoState 