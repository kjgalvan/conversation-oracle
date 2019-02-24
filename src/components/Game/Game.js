import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Game.css';
import Scenario from '../Scenario';
import Display from '../Display';
import Dialog from '../Dialog';
import { Emotes, Characters } from '../../helpers/enums';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: "",
      tempName: "",
    }
  }

  setCharacter = (character) => {
    this.setState({
      ...this.state,
      character
    })
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
      if (this.props.scenario) {
        if (this.state.character) {
          return <Scenario name={this.props.name} character={this.state.character} scenario={this.props.scenario} />;
        } else {
          return (
            <React.Fragment>
              <Row className="DoubleDisplay">
                <Col>
                  <Display key={this.state.character} className="d-flex justify-content-center Img" character={Characters.nana} emote={Emotes.happy} />
                </Col>
                <Col>
                  <Display key={this.state.character} className="d-flex justify-content-center Img" character={Characters.popo} emote={Emotes.happy} />
                </Col>
              </Row>
              <Row>
                <Col className="Dialog">
                  <Dialog text="I want to talk to..." />
                </Col>
              </Row>
              <Row style={{ width: "100%" }}>
                <Col className="Buttons">
                  <Button onClick={() => { this.setCharacter(Characters.nana); }}>Nana</Button>
                </Col>
                <Col className="Buttons">
                  <Button onClick={() => { this.setCharacter(Characters.popo); }}>Popo</Button>
                </Col>
              </Row>
            </React.Fragment>
          );
        }
      } else {
        return (
          <Row>
            <Col className="Dialog solo">
              <Dialog text={`Hi, ${this.props.name}! Please pick a scenario.`} />
            </Col>
          </Row>
        );
      }
    } else {
      return (
        <Row>
          <Col className="Dialog solo">
            <Dialog text="My name is..." />
            <input autoFocus className="form-control" onBlur={this.setTempName} />
            <Button className="Submit" onClick={this.onSubmit}>Submit</Button>
          </Col>
        </Row>
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
