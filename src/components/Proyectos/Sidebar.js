import React from 'react'
import ListadoProyectos from './ListadoProyectos'
import NuevosProyectos from './NuevosProyectos'

export default function Sidebar() {
    return (

        <aside>
             <h1>MERN <span>Tasks</span></h1>
              <NuevosProyectos/> 
                <div className="proyectos"> 
             <h2> Tus Proyectos</h2>
             <ListadoProyectos/> 
            
             
              </div>
                       
        </aside>
   
    )
}
