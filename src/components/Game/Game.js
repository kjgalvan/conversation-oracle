import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Game.css';
import Dialog from '../Dialog';
import Display from '../Display';
import Score from '../Score';
import Buttons from '../Buttons';
import { Scenario, Emotes, Characters } from '../../helpers/enums';
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
      character: "",
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

  setCharacter = (character) => {
    this.setState({
      ...this.state,
      character
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
    if (this.state.scenario && this.props.name) {
      if (this.state.character) {
        if (this.state.scenario[this.state.gameCounter]) {
          return (
            <Container className="Game">
              <Row>
                <Col className="Score" md={{size: 3, offset: 9}} >
                  <Score points="97" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Display className="Display" character={this.state.character} emote={this.state.scenario[this.state.gameCounter].emote} />
                </Col>
              </Row>
              <Row>
                <Col className="Dialog">
                  <Dialog text={this.state.scenario ? this.state.scenario[this.state.gameCounter].dialog : "Please choose a scenario."} />
                </Col>
              </Row>
              <Row>
                <Buttons buttons={this.state.scenario[this.state.gameCounter].buttons.length == 0 ? this.state.next : this.state.scenario[this.state.gameCounter].buttons} />
              </Row>
            </Container>
          );
        } else {
          return <h1>Scenario Complete!</h1>
        }
      }
      else {
        return (
          <Container className="Game">
            <Row><p>I want to talk to...</p></Row>
            <Row>
              <Col>
                <Display character={Characters.nana} emote={Emotes.happy} />
              </Col>
              <Col>
                <Display character={Characters.popo} emote={Emotes.happy} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={() => { this.setCharacter(Characters.nana); }}>Nana</Button>
              </Col>
              <Col>
                <Button onClick={() => { this.setCharacter(Characters.popo); }}>Popo</Button>
              </Col>
            </Row>
          </Container>
        );
      }
    }
    else return null;
  }
}

export default Game;
