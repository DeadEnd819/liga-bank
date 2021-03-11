import React from 'react';
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
import ConverterScreen from '../converter-screen/converter-screen';
import ErrorScreen from '../error-screen/error-screen';
import {AppRoute} from '../../const';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Redirect to={AppRoute.CONVERTER} />
        </Route>
        <Route exact path={AppRoute.CONVERTER}>
          <ConverterScreen />
        </Route>
        <Route render={() => <ErrorScreen />}/>
      </Switch>
    </Router>
  );
};

export default App;
