import { CARGAR_TAREAS, AGREGAR_TAREA, EDITAR_TAREA, ELIMINAR_TAREA, FORMULARIO_EDITAR } from "../../types"


export default (state,action) => {

    

   switch(action.type){
       case ELIMINAR_TAREA: return {
           ...state , tareas: state.tareas.filter((tarea)=> (tarea._id !== action.payload))
       }
       case EDITAR_TAREA: return {
           ...state, tareas: state.tareas.map(tarea=>  (tarea._id === action.payload._id) ? action.payload : tarea  )
       }
      case AGREGAR_TAREA: return {
          ...state, tareas: [...state.tareas,action.payload]
      }
      case FORMULARIO_EDITAR: return {
          ...state, mostrarformulario: action.payload
      }
       case CARGAR_TAREAS: return {
           ...state, tareas: action.payload
       }
    
       default: return state
   }


}