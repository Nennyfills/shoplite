import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Home from 'Pages/Home';
import NotFound from 'Pages/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route  component={NotFound} />
  </Switch>
);

export default Routes;
