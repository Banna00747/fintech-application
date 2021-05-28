
import React from 'react';
import './App.scss';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <React.Fragment>
          <Route exact path="/">
            <Home />
          </Route>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
