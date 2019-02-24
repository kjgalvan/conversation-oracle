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
        <Game key={this.state.scenario} name="John" scenario={this.state.scenario} />
      </React.Fragment>
    );
  }
}

export default App;
