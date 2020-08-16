
import React,{useContext} from 'react'
import Proyecto from './Proyecto'
import ProyectoContext from '../../contexts/Proyectos/ProyectoContext'
export default function ListadoProyectos() {
   
        //Context Proyectos
        const proyectoContext = useContext(ProyectoContext)
        const {proyectos} = proyectoContext
        //Efecto para cargar proyectosartificales

    return (
        <div>
            <ul className="listado-proyectos">

                  {proyectos.length > 0  ? proyectos.map(proyecto=>(<Proyecto key={proyecto._id} proyecto={proyecto}/> )): null }
            </ul>
           
        </div>
    )
}
