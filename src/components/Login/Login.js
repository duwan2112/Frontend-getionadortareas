import React,{useState,useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import RegistroContext from '../../contexts/Registro/RegistroContext'
import AlertaContext from '../../contexts/Alertas/AlertaContext'

export default function Login(props) {
    // Estados
    const [datos,setDatos] = useState({
        email:'',password: ''
    })
    const {email,password} = datos
    //Context 
    const registroState = useContext(RegistroContext)
    const {usuarioLogueado,mensaje,autenticado} = registroState

    const alertaContext = useContext(AlertaContext)
    const {alerta,mostrarAlerta} = alertaContext
    //UseEffect 
    useEffect(()=>{
        if(autenticado){
            props.history.push('/proyectos')
        }
       if(mensaje){
          return mostrarAlerta({msg: mensaje.msg.msg,categoria:mensaje.categoria})
       }

        //eslint-disable-next-line
    },[mensaje,autenticado])
 
 
     
    //Funciones
    const onChange = e => {
       return setDatos({...datos, [e.target.name]:e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault()
        
       if(email.trim() && password.trim()){
           usuarioLogueado(datos)
       }

    }
    return (
        <div>
            <div className="form-usuario">
            {alerta ? <p className={`alerta ${alerta.categoria}`}>{alerta.msg}</p> : null}
                <div className="contenedor-form sombra-dark">
                   <h1>Logueate!!</h1>  
                   <form onSubmit={onSubmit}> 
                      <div className="campo-form"> 
                        <label htmlFor="email">Email</label>
                       <input type="text"  value={datos.email} onChange={onChange}  name="email" id="email" placeholder="Tu email"/>            
                       </div>
                      <div className="campo-form">
                      <label htmlFor="password">Password</label>
                       <input type="password" name="password"   value={datos.password} onChange={onChange}   id="password" placeholder="Tu Password"/>
                      </div>  
                      <div className="campo_form">
                          <input type="submit" value="Loguearme" className="btn btn-block btn-primario"/>
                      </div>
                   </form>
                    <Link to="/registro" className="enlace-cuenta" > Crear una cuenta </Link>
                </div>   
               
            </div>
         
        </div>
    )
}
