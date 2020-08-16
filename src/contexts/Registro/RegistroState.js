import React,{useReducer} from 'react'
import RegistroContext from './RegistroContext'
import RegistroReducer from './RegistroReducer'
import clienteAxios from '../../config/clienteAxios'
import { REGISTRO_ERROR, REGISTRO_EXITOSO, LOGIN_ERROR,OBTENER_USUARIO, LOGIN_EXITOSO, CERRAR_SESION } from '../../types'
import AuthToken from '../../config/AuthToken'



const RegistroState = (props) => {
    const initialState = { 
         token: localStorage.getItem('token'),
         autenticado: null,
         mensaje: null,
         usuario: null,
         cargando: true
    }
   const registrarUsuario = async datos => {
     
        try {
             const respuesta = await clienteAxios.post('/api/registro',datos)
             dispatch({type: REGISTRO_EXITOSO,payload: respuesta.data})
             
             usuarioAutenticado()
        } catch (error) {
             const alerta = {msg: error.response.data,categoria: 'alerta-error'}
            dispatch({
                 type: REGISTRO_ERROR,
                 payload: alerta
            })
        }
   }

    const usuarioAutenticado = async () => {
         const token = localStorage.getItem('token') 
         if(token){
              AuthToken(token)
         }
         
         try {
              const respuesta = await clienteAxios.get('/api/auth')
              dispatch({
                   type: OBTENER_USUARIO,
                   payload: respuesta.data.usuario
              })
             
         } catch (error) {
              
          const alerta = {msg: error.response.data,categoria: 'alerta-error'}  
            dispatch({
                 type: LOGIN_ERROR,
                 payload: alerta
            })
         } 
    }
    const usuarioLogueado =async datos => {

        try {
             const respuesta = await clienteAxios.post('api/auth',datos)

             dispatch({type: LOGIN_EXITOSO, payload:respuesta.data})
             usuarioAutenticado()
        } catch (error) {
          const alerta = {msg: error.response.data,categoria: 'alerta-error'}
          dispatch({
               type: LOGIN_ERROR,
               payload: alerta
          })
        }
 
      
    }
      
    const cerrarSesion = () => {
         dispatch({
              type: CERRAR_SESION
         })
    }

    const [state,dispatch] = useReducer(RegistroReducer,initialState)
     
     return (
       <RegistroContext.Provider  
       value={{
            mensaje: state.mensaje,
            autenticado: state.autenticado,
            cargando: state.cargando,
            usuario: state.usuario,
            usuarioLogueado,
            usuarioAutenticado,
            cerrarSesion,

          registrarUsuario
       }}>
            {props.children}
            </RegistroContext.Provider>


     )
     
}

export default RegistroState