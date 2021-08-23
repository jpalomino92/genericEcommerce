import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer saludar="Aca van los productos" />
    </>
  );
}

export default App;
