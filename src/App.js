import React from 'react';
import './App.css';
import Titulo from './Componets/Titulo'
import Nav from './Componets/Nav'
import Principal from './Componets/Principal'
import Footer from './Componets/Footer'

function App() {
  return (
    <div className="App">
      <Titulo/>
      <Nav/>
      <Principal/>
      <Footer/>
    </div>
  );
}

export default App;
