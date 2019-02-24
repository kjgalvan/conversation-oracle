import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Game.css';
import Dialog from '../Dialog';
import Display from '../Display';
import Score from '../Score';
import Buttons from '../Buttons';
import { Scenario } from '../../helpers/enums';
import {
  getGroceryScenario,
} from '../../helpers/scenarios';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      points: 0,
      response: null,
      gameOver: null,
      gameCounter: 0,
      scenario: null,
      next: [{ onClick: this.nextSlide, text: "Next" }]
    }

    this.getGroceryScenario = getGroceryScenario.bind(this);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      scenario: this.getScenario(this.props.scenario)
    });
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
        return this.getGroceryScenario(this.props.name);
      }

      case Scenario.school: {
        // Return school scenario array
        break;
      }
      default: break;
    }
  }

  render() {
    return (
      <Container className="Game">
        <Row>
          <Col className="Score" md={{size: 3, offset: 9}} >
            <Score points="97" />
          </Col>
        </Row>
        <Row className="Display" >
          <Col>
            <Display />
          </Col>
        </Row>
        <Row>
          <Col className="Dialog">
            <Dialog text={this.state.scenario ? this.state.scenario[this.state.gameCounter].dialog : "Please choose a scenario."} />
          </Col>
        </Row>
        <Row>
          <Buttons buttons={this.state.next} />
        </Row>
      </Container>
    );
  }
}

export default Game;
