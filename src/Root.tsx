import React from 'react';
import './Root.css';
import Home from './Pages/Static/Home/'
import Kata from './Pages/Kata';

const App: React.FC = () => {
  return (
    <div className="App">
      Here is my portfolio
      <Home/>
      <Kata/>
    </div>
  );
}

export default App;
