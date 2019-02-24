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
      response: null,
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
              <Row>
                <Col>
                  <Row>
                    <Col className="Score" md={{size: 3, offset: 9}} >
                      <Score points={this.state.points} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Display
                        key={this.state.character}
                        className="d-flex justify-content-center Display Img"
                        character={this.state.character}
                        emote={this.state.response ? this.state.response.emote : this.state.scenario[this.state.gameCounter].emote}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="Dialog">
                      <Dialog text={this.state.response ? this.state.response.dialog : this.state.scenario[this.state.gameCounter].dialog} />
                    </Col>
                  </Row>
                  <Row>
                    <Buttons buttons={this.state.scenario[this.state.gameCounter].buttons.length === 0 ? this.state.next : this.state.scenario[this.state.gameCounter].buttons} />
                  </Row>
                </Col>
              </Row>
            );
          } else {
            return (
              <Row>
                <Col>
                  <h1>Scenario Complete!</h1>
                  <p>Your final score was <b>{this.state.points}</b>.</p>
                </Col>
              </Row>
            );
          }
        } else {
          return (
            <React.Fragment>
              <p>I want to talk to...</p>
              <Row className="DoubleDisplay">
                <Col>
                  <Display key={this.state.character} className="d-flex justify-content-center Img" character={Characters.nana} emote={Emotes.happy} />
                </Col>
                <Col>
                  <Display key={this.state.character} className="d-flex justify-content-center Img" character={Characters.popo} emote={Emotes.happy} />
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
          My name is...
          <Input onBlur={this.setTempName} />
          <Button className="Submit" onClick={this.onSubmit}>Submit</Button>
        </React.Fragment>
      );
    }
  }

  render() {
    const gameContent = this.getGameContent();
    return (
      <Container className="Game">
        {gameContent}
      </Container>
    );
  }
}

export default Game;
