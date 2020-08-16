import React from 'react'
import SideBar from './Sidebar'
import Barra from './Barra'
import FormTareas from './FormTareas'
import ListadoTareas from './ListadoTareas'

export default function Proyectos() {
    return (
       <>  
          <div className="contenedor-app">
           <SideBar/> 
           <div className="seccion-principal">
               <Barra/> 
               <main>
                   <FormTareas/> 
                  <div className="contenedor-tareas">
                    <ListadoTareas/> 
                  </div>
               </main>
               </div> 
  

          </div>
             
        
        </> 
    )
}
