import React from 'react';
import {Router, Route, Redirect, Switch} from 'react-router-dom'
import history from './Config/history'
import Home from './Pages/Static/Home/'
import Page from './Pages/Static/404'
import Kata from './Pages/Kata';
import { routeNotFound, homeRoute, kataRoute, projectsRoute } from './Config/Navigation/routes';
import TopNav from './Components/TopNav/TopNav';
import Projects from './Pages/Projects/Projects';
import './Root.scss';

const App: React.FC = () => {
  return (
    <Router history={history} >
      <TopNav/>
      <Switch>
      <Route exact path={homeRoute} component ={Home} />
      <Route exact path={kataRoute} component ={Kata} />
      <Route exact path ={projectsRoute} component ={Projects}/>
      <Route exact path={routeNotFound} component ={Page} />
      <Redirect to={routeNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
