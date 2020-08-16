import { ACTIVAR_FORMULARIO, AGREGAR_PROYECTO ,CARGAR_PROYECTOS, CARGAR_PROYECTOACTUAL, ELIMINAR_PROYECTO } from "../../types"


export default (state,action) => {

    

   switch(action.type){
    
      case ELIMINAR_PROYECTO:  return {
          ...state , proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload._id) 
      }
      case CARGAR_PROYECTOACTUAL: return {
          ...state, proyectoactual: action.payload
      }
      case CARGAR_PROYECTOS : return {
          ...state, proyectos: action.payload
      }
      
       case AGREGAR_PROYECTO : return{
           ...state, proyectos: [...state.proyectos,action.payload]
       }
     
       case ACTIVAR_FORMULARIO: return{
        ...state , estadoformulario: action.payload
    }
       default: return state
   }


}