import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import Game from '../Game';
import Header from '../Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      scenario: null,
      gameId: uuidv4(),
    }
  }

  setScenario = (scenario) => {
    this.setState({
      ...this.state,
      scenario,
      gameId: uuidv4(),
    })
  }

  setName = (name) => {
    this.setState({
      ...this.state,
      name
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Game
          key={this.state.gameId}
          name={this.state.name}
          scenario={this.state.scenario}
          setName={this.setName}
          setScenario={this.setScenario}
        />
      </React.Fragment>
    );
  }
}

export default App;
