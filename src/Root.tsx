import React from 'react';
import {Router, Route, Redirect, Switch} from 'react-router-dom'
import history from './Config/history'
import Home from './Pages/Static/Home/'
import Page from './Pages/Static/404'
import Kata from './Pages/Kata';
import './Root.css';
import { routeNotFound, homeRoute, kataRoute } from './Config/Navigation/routes';
import TopNav from './Components/TopNav/TopNav';

const App: React.FC = () => {
  return (
    <Router history={history} >
      <TopNav/>
      <Switch>
      <Route exact path={homeRoute} component ={Home} />
      <Route exact path={kataRoute} component ={Kata} />
      <Route exact path={routeNotFound} component ={Page} />
      <Redirect to={routeNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
