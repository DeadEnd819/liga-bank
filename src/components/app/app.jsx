import React from 'react';
import {Switch, Route, Redirect, BrowserRouter as Router} from "react-router-dom";
import ConverterScreen from '../converter-screen/converter-screen';
import ErrorScreen from "../error-screen/error-screen";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={`/`}>
          <Redirect to={`/converter`} />
        </Route>
        <Route exact path={`/converter`}>
          <ConverterScreen />
        </Route>
        <Route render={() => <ErrorScreen />}/>
      </Switch>
    </Router>
  );
};

export default App;
