import React, { useContext} from "react";
import Tarea from "./Tarea";
import TareaContext from "../../contexts/tareas/TareaContext";
import ProyectoContext from "../../contexts/Proyectos/ProyectoContext";
export default function ListadoTareas() {
  let filtrarTareas = [];
  //CONTEXT PROYECTOS
  const proyectoContext = useContext(ProyectoContext);
  const { proyectoactual,eliminarProyecto,cargarProyectoactual} = proyectoContext;

  //CONTEXT TAREAS
  const tareasContext = useContext(TareaContext);
  const { tareas } = tareasContext;



  // filtrar las tareas por proyecto
  if (proyectoactual) {
    
    filtrarTareas = tareas.filter(
      (tareas) => tareas.idproyecto === proyectoactual.id
    );
  }

  // Funcion onClick para eliminar proyectos 
  const onClick= () => {
      eliminarProyecto(proyectoactual)
      cargarProyectoactual(null)
  }

  return (
    <>
      {proyectoactual ? (
        <>
          {" "}
          <h2> Proyecto: {proyectoactual.nombre}</h2>
          <ul className="listado-tareas">
            {filtrarTareas.length > 0 ? (
              <>
                {" "}
                {filtrarTareas.map((tarea) => (
                  <Tarea key={tarea._id} tarea={tarea} />
                ))}{" "}
              </>
            ) : (
              <li className="tarea">
                <p>No hay tareas</p>
              </li>
            )}
          </ul>{" "}
          <button onClick={onClick} type="button" className="btn btn-eliminar">
            Eliminar Proyecto &times;{" "}
          </button>
        </>
      ) : (
        <h2>Selecciona un proyecto </h2>
      )}
    </>
  );
}
