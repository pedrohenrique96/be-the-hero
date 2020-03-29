import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Profile from '~/pages/Profile';
import NewIncidents from '~/pages/NewIncidents';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncidents} />
      </Switch>
    </BrowserRouter>
  );
}
