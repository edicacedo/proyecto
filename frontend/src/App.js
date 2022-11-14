import './App.css';

import PaginaPrincipal from './componentes/paginaprincipal';

import ClientesListar from './componentes/clientesListar';

import Informacion from './componentes/informacion';

import Registro from './componentes/registro';

import ClientesAgregar from './componentes/clientesAgregar';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Proyecto</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="/clienteslistar">Clientes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/informacion">Informacion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/registro">Registrarse</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPrincipal/>} exact></Route>
        <Route path='clienteslistar' element={<ClientesListar/>} exact></Route>      
        <Route path='/informacion' element={<Informacion/>} exact></Route>
        <Route path='/registro' element={<Registro/>} exact></Route>
        <Route path='/clientesAgregar' element={<ClientesAgregar/>} exact></Route>
      </Routes>    
    </BrowserRouter>
    <section className="mt-5 mb-5">
      <div align="center">
          Copyright (c) 2022 - MisionTIC - UCaldas
      </div> 
    </section>
    </div>
  );
}

export default App;
