import { REGISTRO_ERROR ,REGISTRO_EXITOSO, LOGIN_ERROR, OBTENER_USUARIO, LOGIN_EXITOSO, CERRAR_SESION} from "../../types/index"



export default  (state,action) => {
    
   switch(action.type){
      case OBTENER_USUARIO: return{
          ...state,usuario: action.payload,autenticado: true,cargando: false
      }
       case LOGIN_EXITOSO:
       case REGISTRO_EXITOSO:
        localStorage.setItem('token',action.payload.token)    
       return {
           ...state, mensaje: null ,autenticado: true,cargando: false
       }
       case CERRAR_SESION:
       case LOGIN_ERROR:
       case REGISTRO_ERROR: 
       localStorage.removeItem('token')
       return {
        ...state, mensaje: action.payload,token:null,autenticado: null,usuario: null,cargando: false
    }
       default: return state
   }
}

