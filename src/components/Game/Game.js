import React from 'react';
import { Container, Row, Col, Button, Input } from 'reactstrap';
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
      next: [{ onClick: this.nextSlide, text: "Next" }],
      tempName: "",
    }

    this.getGroceryScenario = getGroceryScenario.bind(this);
  }

  componentDidMount() {
    if (this.props.scenario) {
      this.setState({
        ...this.state,
        scenario: this.getScenario(this.props.scenario)
      });
    }
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
        return this.getGroceryScenario(this.props.name);
      }
      default: break;
    }
  }

  setTempName = (event) => {
    this.setState({
      ...this.state,
      tempName: event.target.value
    });
  }

  onSubmit = () => {
    this.props.setName(this.state.tempName);
  }

  getGameContent = () => {
    if (this.props.name) {
      if (this.state.scenario) {
        if (this.state.character) {
          if (this.state.scenario[this.state.gameCounter]) {
            return (
              <React.Fragment>
                <Row>
                  <Col className="Score" md={{size: 3, offset: 9}} >
                    <Score points={this.state.points} />
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
                  <Buttons buttons={this.state.next} />
                </Row>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <h1>Scenario Complete!</h1>
                <p>Your final score was <b>{this.state.points}</b>.</p>
              </React.Fragment>
            );
          }
        } else {
          return (
            <React.Fragment>
              <p>I want to talk to...</p>
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
            </React.Fragment>
          );
        }
      } else { return <p>Hi, {this.props.name}! Please pick a scenario.</p> } 
    } else {
      return (
        <React.Fragment>
          <Row>
            <Col>My name is...
              <Input onBlur={this.setTempName} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="Submit" onClick={this.onSubmit}>Submit</Button>
            </Col>
          </Row>
        </React.Fragment>
      );
    }
  }

  render() {
    const gameContent = this.getGameContent();
    return (
      <Container className="Game">
        <Row>
          <Col>
            {gameContent}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Game;
