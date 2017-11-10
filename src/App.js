import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './component/Login/Login';
import Make from './component/Make/Make';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/make" component={Make} />
        </div>
      </Router>
    );
  }
}

export default App;
