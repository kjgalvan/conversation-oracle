import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Game.css';
import Dialog from '../Dialog/Dialog';
import Display from '../Display';
import Score from '../Score/Score';
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
      <Container className="Game">
        <Row>
          <Col md={{size: 3, offset: 9}} >
            <Score points="97" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Display />
          </Col>
        </Row>
        <Row>
          <Col>
            <Dialog />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Game;
