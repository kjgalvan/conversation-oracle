import React, { Component } from 'react';
import Game from '../Game/Game';
import Navigation from '../Navigation/Navigation';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      scenario: null,
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Game name="John" />
      </React.Fragment>
    );
  }
}

export default App;
