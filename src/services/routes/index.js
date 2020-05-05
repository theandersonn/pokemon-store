import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Category from '../pages/Theme';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/tema/:theme" component={Category} />
  </Switch>
);

export default Routes;
