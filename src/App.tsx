import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GlobalStyle } from './styles';

const App = () => {
  return (
    <>
      <HashRouter>
        <Route
          render={({ location }) => (
            <Switch location={location}>
              <Route path="/" exact={true} component={Home} />
              <Route component={NotFound} />
            </Switch>
          )}
        />
      </HashRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
