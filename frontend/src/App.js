
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar"
import Inicio from "./view/Inicio"
import Blog from "./view/Blog"
import Grups from "./view/Grupos"



import { Registro } from './view/Registro';
import Covers from "./view/Covers";
import Contemporaneo from "./view/Contemporaneo";
import Urbano from "./view/Urbano";

import Estudiantes from './d-b/Estudiantes';
import Estudiant from './d-b/Estudiant';
import Start from "./d-b/Start"
import Acudientes from './d-b/Acudientes';
import Acudient from './d-b/Acudient';
import Profesores from "./d-b/Profesores"
import Profesor from "./d-b/Profesor"
import Matriculas from './d-b/Matriculas';
import Matric from './d-b/Matric';
import Mensualidades from './d-b/Mensualidades';
import Mensuald from './d-b/Mensuald';
import Grupos from './d-b/Grupos';
import Grup from './d-b/Grup';
import Subniveles from './d-b/Subniveles';
import Subniv from './d-b/Subniv';
import Competencia from './d-b/Registrocompetencia';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/grups/*" element={<Grups />} />
        <Route path="start" element={<Start />} />
        <Route path="/start/estudiantes" element={<Estudiantes />} />
        <Route path="/start/profesores" element={<Profesores />} />
        <Route path="/start/acudientes" element={<Acudientes />} />
        <Route path="/start/mensualidades" element={<Mensualidades />} />
        <Route path="/start/grupos" element={<Grupos/>} />
        <Route path="/start/matriculas" element={<Matriculas />} />
        <Route path="/start/subniveles" element={<Subniveles/>} />
        <Route path="/start/Registrocompetencia" element={<Competencia/>} />

        <Route path="/grupos/contemporaneo" element={<Contemporaneo />} />
        <Route path="/grupos/covers" element={<Covers />} />
        <Route path="/grupos/urbano" element={<Urbano />} />
        <Route path="/grupos/registro" element={<Registro />} />

        <Route path="/" exact component ={Estudiantes}/>
        <Route path='estudianteid/:id' component={Estudiant}/>

        <Route path='acudientes/:id' exact component={Acudientes}/>
        <Route path='acudientesid/:id' component={Acudient}/>

        
        <Route path='mensualidades/:id'  exact component={Mensualidades}/>
        <Route path='mensualidadid/:id' component={Mensuald}/>

        <Route path='grupos/:id' exact component={Grupos} />
        <Route path='grupoid/:id' component={Grup} />
        
        <Route path='subniveles/:id' exact component={Subniveles} />
        <Route path='subnivelid/:id' component={Subniv} />
        
        <Route path='competencias/:id' component={Competencia} />

        <Route path="/" exact component ={Profesores}/>
       <Route path='profesorid/:id' component={Profesor}/>

       <Route path="/" exact component ={Matriculas}/>
        <Route path='matriculaid/:id' component={Matric}/>
      </Routes>
        
      


     
    </div>
  );
}

export default App;
