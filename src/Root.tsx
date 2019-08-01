import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from './Pages/Static/Home/'
import Kata from './Pages/Kata';
import './Root.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>

      Here is my portfolio
      <Home/>
      <Kata/>
      <Redirect/>
      </Switch>
    </Router>
  );
}

export default App;
