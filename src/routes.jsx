import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Error from './pages/Error';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/error" component={Error} />
        <Redirect to="/error"/> 
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;