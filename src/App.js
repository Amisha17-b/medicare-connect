// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import History from './pages/History';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/appointments" component={Appointments} />
        <Route path="/history" component={History} />
      </Switch>
    </Router>
  );
};

export default App;
