
import React, { useState } from 'react';
import NavBar from "./components/navBar"
import CartWidget from './components/Cartwidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ boxSizing: 'border-box', margin: '0', padding: '20px' }}>
      <h1>Tienda Virtual</h1>
      <NavBar />
      <CartWidget />
      <ItemListContainer greeting="¡Hola! Bienvenido a nuestra tienda." />
    </div>
  )
}

export default App;

