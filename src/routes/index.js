import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Theme from '../pages/Theme';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/tema/:theme" component={Theme} />
  </Switch>
);

export default Routes;
