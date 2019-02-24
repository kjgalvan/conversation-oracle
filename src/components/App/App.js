import React, { Component } from 'react';
import Game from '../Game';
import Navigation from '../Navigation';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      scenario: null,
      character: "nana",
    }
  }

  setScenario = (scenario) => {
    this.setState({
      ...this.state,
      scenario
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navigation onClick={this.setScenario} />
        <Game name="John" character={this.state.character} scenario={this.state.scenario} />
      </React.Fragment>
    );
  }
}

export default App;
