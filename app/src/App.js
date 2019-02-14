// App.js which connects to Main, which connects to all.

import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route component={Main} />
      </div>
    );
  }
}

export default App;
