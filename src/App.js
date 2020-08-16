import React from 'react';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import Registro from './components/Registro/Registro'
import Login from './components/Login/Login'
import Proyectos from './components/Proyectos/Proyectos'
import RegistroState from './contexts/Registro/RegistroState'
import AlertaState from './contexts/Alertas/AlertaState'
import RoutaPrivada from './components/RoutaPrivada'
import ProyectoState from './contexts/Proyectos/ProyectoState'
import TareaState from './contexts/tareas/TareaState'
function App() {
  return (
  <AlertaState>
    <RegistroState> 
      <ProyectoState> 
        <TareaState> 
     <Router> 
         <Switch>
           
           <Route exact path="/" component={Login}/>
           <Route exact path="/registro" component={Registro}/>
           <RoutaPrivada exact path="/Proyectos" component={Proyectos} />
            </Switch>
        
       
        </Router>
        </TareaState>
        </ProyectoState>
  </RegistroState>
  </AlertaState> 
  );
}

export default App;
