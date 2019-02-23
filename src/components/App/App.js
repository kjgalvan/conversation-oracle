import React, { Component } from 'react';
import Game from '../Game/Game';
import Navigation from '../Navigation/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment className="App">
      <Navigation />
      <Game />
      </React.Fragment>
    );
  }
}

export default App;
