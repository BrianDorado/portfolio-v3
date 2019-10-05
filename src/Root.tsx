import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from './Config/history';
import Home from './Pages/Static/Home/';
import Page from './Pages/Static/404';
import Kata from './Pages/Kata';
import {
  routeNotFound,
  homeRoute,
  kataRoute,
  projectsRoute,
  contactRoutes,
} from './Config/Navigation/routes';
import TopNav from './Components/TopNav/TopNav';
import Projects from './Pages/Projects/Projects';
import './Root.scss';
import Contact from './Pages/Static/Contact/Contact';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <div className="App">
        <TopNav />
        <Switch>
          <Route exact path={homeRoute} component={Home} />
          <Route exact path={kataRoute} component={Kata} />
          <Route exact path={projectsRoute} component={Projects} />
          <Route exact path={routeNotFound} component={Page} />
          <Route exact path={contactRoutes} component = {Contact}/>
          <Redirect to={routeNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
