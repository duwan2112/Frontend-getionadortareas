import React,{useState,useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import AlertaContext from '../../contexts/Alertas/AlertaContext';
import RegistroContext from '../../contexts/Registro/RegistroContext';
export default function Registro(props) {

    // Estado del formulario
     const [usuario,setUsuario] = useState({nombre:'', email: '',password:'',confirmar:''});
     
     //Context Alerta
        const alertaContext = useContext(AlertaContext)
        const {alerta,mostrarAlerta} = alertaContext
     //context Registro 
       const registroState = useContext(RegistroContext)
       const {registrarUsuario,mensaje,autenticado } = registroState
      //Extrayendo nombres
     const {nombre,email,password,confirmar} = usuario
     //UseEffect 
      useEffect(()=>{
          if(autenticado){
              props.history.push('/proyectos')
          }
         if(mensaje){
            return mostrarAlerta({msg: mensaje.msg.msg,categoria:mensaje.categoria})
         }
           //eslint-disable-next-line
      },[mensaje,autenticado,props.history])

    //Funciones
     const onChange = e => {
       setUsuario({...usuario, [e.target.name]:e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault()
        if(nombre.trim() && email.trim() && password.trim() && confirmar.trim() ){
             if(password.length < 6){
                 return mostrarAlerta({msg:'Su clave debe tener minimo 6 digitos',categoria:'alerta-error'})
             }

            if(password !== confirmar){
                return mostrarAlerta({msg:'Su clave y la confirmacion deben ser iguales',categoria:'alerta-error'})
            }
            registrarUsuario({nombre,email,password})
            return mostrarAlerta(null)

        }
        mostrarAlerta({msg:'Debe rellenar todos los campos',categoria:'alerta-error'})
        
    }
    return (
        <div className="form-usuario">
           {alerta ? <p className={`alerta ${alerta.categoria}`}>{alerta.msg}</p> : null}
            <div className="contenedor-form sombra-dark">

                <h1>Registrate!!</h1> 
                <form onSubmit={onSubmit} > 
                  <div className="campo-form">
                      <label htmlFor="nombre">Nombre</label>
                      <input onChange={onChange} value={nombre} name="nombre" type="text" id="nombre" placeholder="Tu Nombre" />
                  </div>
                  <div className="campo-form">
                      <label htmlFor="email">Email</label>
                      <input onChange={onChange} value={email} name="email" type="text" id="email" placeholder="Tu Email" />
                  </div>
                  <div className="campo-form">
                      <label htmlFor="password">Password</label>
                      <input onChange={onChange} value={password} name="password" type="password" id="password" placeholder="Tu Password" />
                  </div>
                  <div className="campo-form">
                      <label htmlFor="confirmar">Confirmar</label>
                      <input onChange={onChange} value={confirmar} name="confirmar" type="password" id="confirmar" placeholder="Confirma la contraseña" />
                  </div>
                  <div className="campo-form">
                      <input type="submit" value="Registrarme" className="btn btn-primario btn-block"/>
                  </div>
                     
                </form>
                <Link to="/" className="enlace-cuenta">Volver a iniciar Seccion</Link>
            </div>
            
        </div>
    )
}
