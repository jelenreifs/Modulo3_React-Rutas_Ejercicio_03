import { BrowserRouter, Route, Link } from "react-router-dom";
import React, { useState } from 'react';

function Gatos(props) {
  const mostrarGatos = props.gatos.map(gato => { 
    return <img src={gato} alt="" />
  })
    
    return mostrarGatos
}

function Perros(props) {
  const mostrarPerros = props.perros.map(perro => { 
    return <img src={perro} alt="" />
  })
    
    return mostrarPerros
}


function App() {
  const [gatos, setGatos] = useState([
    "https://cf.ltkcdn.net/gatos/images/std/236641-699x450-etapas-desarrollo-gatitos.jpg",
    "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/facebook_share/public/Purina%C2%AE%20La%20llegada%20del%20gatito%20a%20casa.jpg?itok=6QG07anP",
    "https://www.hogarmania.com/archivos/201204/estrenimiento-gato-bebe2-xl-668x400x80xX.jpg"
  ]);

  const [perros, setPerros] = useState([
    "https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg",
    "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59bbb29c5bafe878503c9872/husky-siberiano-bosque.jpg",
    "https://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg"
  ]);
  return (
    <>
      <BrowserRouter>
         <header>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/perros">Perros</Link>
            </li>
             <li>
                <Link to="/gatos">Gatos</Link>
              </li>
            </ul>
        </header>

        <Route exact path="/">
          <h1>Mis mascotitas</h1>
       </Route>
     
        <Route exact path="/perros">
          <h1>Perros</h1>
          <Perros perros={perros} />
       </Route>
         
        <Route exact path="/gatos">
          <h1>Gatos</h1>
          <Gatos gatos={gatos} />
       </Route>
        
      </BrowserRouter>
      </>
    )
}

export default App;
