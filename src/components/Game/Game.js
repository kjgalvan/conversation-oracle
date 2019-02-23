import React from 'react';
import './Game.css';
import Dialog from '../Dialog/Dialog';
import Display from '../Display/Display';

const Scenario = {
    grocery: "GROCERY",
    school: "SCHOOL"
}

class Game extends React.Component {
  componentDidMount() {

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
