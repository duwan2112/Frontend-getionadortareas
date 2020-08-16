import React,{useReducer} from 'react'
import AlertaContext from './AlertaContext'
import AlertaReducer from './AlertaReducer'
import {MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../../types/index'
const AlertaState  = (props) => {

    const initialState = {
          alerta: null
    } 

    const [state,dispatch] = useReducer(AlertaReducer,initialState)
  
   const mostrarAlerta = alerta => { 
         dispatch({
             type: MOSTRAR_ALERTA,
             payload: alerta
         })

     setTimeout(()=> {
        dispatch({
          type: OCULTAR_ALERTA
        })
         
     },5000)
     
   }
     
 return (
   <AlertaContext.Provider 
   
   value={{
       alerta: state.alerta,
       mostrarAlerta
   }}>
        {props.children}
        </AlertaContext.Provider>
 
     
 )

}


export default AlertaState