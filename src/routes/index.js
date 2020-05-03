import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Category from '../pages/Category';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/category" component={Category} />
  </Switch>
);

export default Routes;
