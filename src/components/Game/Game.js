import React from 'react';
import './Game.css';
import Dialog from '../Dialog/Dialog';
import Display from '../Display';
import { Scenario } from '../../helpers/enums';
import {
  getExampleScenario,
} from '../../helpers/scenarios';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      points: 0,
      response: null,
      gameOver: null,
      gameCounter: 0,
      next: [{ onClickHandler: this.nextSlide, text: "Next" }]
    }

    this.getExampleScenario = getExampleScenario.bind(this);
  }

  componentDidMount() {
    this.getExampleScenario();
  }

  nextSlide = () => {
    const { gameCounter } = this.state;
    this.setState({
      ...this.state,
      gameCounter: gameCounter+1,
    })
  }

  getScenario = (scenario) => {
    switch(scenario) {
      case Scenario.grocery: {
        // Return grocery scenario array
      }

      case Scenario.school: {
        // Return school scenario array
      }
    }
  }

  render() {
    return (
      <div className="Game">
        <Display />
        <Dialog />
      </div>
    );
  }
}

export default Game;
