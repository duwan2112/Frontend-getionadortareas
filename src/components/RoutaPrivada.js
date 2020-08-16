import React,{useContext,useEffect} from 'react'
import {Route,Redirect} from 'react-router-dom'
import RegistroContext from '../contexts/Registro/RegistroContext'
import ProyectoContext from '../contexts/Proyectos/ProyectoContext'


const RutaPrivada = ({component: Component,...props})=>{


    const registroContext = useContext(RegistroContext)
    const {autenticado,usuarioAutenticado,cargando} = registroContext



    const proyectoContext = useContext(ProyectoContext) 
    const {cargarProyectos} = proyectoContext
     useEffect(()=> {
               usuarioAutenticado()
               cargarProyectos()
                 //eslint-disable-next-line
     },[])
    
    return(
        <Route 
         {...props} render={props => !autenticado && !cargando ? 
            (<Redirect to="/"/>)
            
            
            : (
                <Component {...props} /> 

            ) }
         
        /> 
    )
}


export default RutaPrivada