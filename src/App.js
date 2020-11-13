import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Mensaje from './components/Mensaje';
import Spinner from './components/Spinner';

function App() {

  // Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  let component;

  if(cargando) {
    component = <Spinner />
  } else if(total === 0) {
    component = <Mensaje />
  } else {
    component = <Resultado total={cantidad} plazo={plazo} cantidad={cantidad}/>
  }

  return (
    <Fragment>
      <Header titulo="Cotizador de prestamos" />
      <div className="container">
        <Formulario guardarCargando={guardarCargando} cantidad={cantidad} guardarCantidad={guardarCantidad} plazo={plazo} guardarPlazo={guardarPlazo} guardarTotal={guardarTotal}/>

        <div className="mensajes">
          {component}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
