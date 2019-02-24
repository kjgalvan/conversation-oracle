import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Game.css';
import Dialog from '../Dialog';
import Display from '../Display';
import Score from '../Score';
import Buttons from '../Buttons';
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
      scenario: null,
      next: [{ onClickHandler: this.nextSlide, text: "Next" }]
    }
    this.getExampleScenario = getExampleScenario.bind(this);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      scenario: this.getScenario("GROCERY")
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
        return this.getExampleScenario();
      }

      case Scenario.school: {
        // Return school scenario array
      }
    }
  }

  render() {
    if (this.state.scenario && this.props.name) {
      return (
        <Container className="Game">
          <Row>
            <Col className="Score" md={{size: 3, offset: 9}} >
              <Score points="97" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Display className="Display" character={this.props.character} emote={this.state.scenario[this.state.gameCounter].emote} />
            </Col>
          </Row>
          <Row>
            <Col className="Dialog">
              <Dialog  />
            </Col>
          </Row>
          <Row>
            <Buttons buttons={this.state.next} />
          </Row>
        </Container>
      );
    }
    else return null;
  }
}

export default Game;
