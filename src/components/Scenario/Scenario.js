import React from "react";
import { Row, Col } from "reactstrap";
import Dialog from "../Dialog";
import Display from "../Display";
import Score from "../Score";
import Buttons from "../Buttons";
import { Scenarios } from "../../helpers/enums";
import {
  getGroceryScenario,
  getSchoolScenario,
  getParkScenario,
  getMarketScenario
} from "../../helpers/scenarios";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      points: 0,
      total: 0,
      response: null,
      gameOver: null,
      gameCounter: 0,
      scenario: null,
      next: [{ onClick: this.nextSlide, text: "Next" }]
    };

    this.getGroceryScenario = getGroceryScenario.bind(this);
    this.getSchoolScenario = getSchoolScenario.bind(this);
    this.getMarketScenario = getMarketScenario.bind(this);
    this.getParkScenario = getParkScenario.bind(this);
  }

  componentDidMount() {
    if (this.props.scenario) {
      const gameInfo = this.getScenario(this.props.scenario);
      this.setState({
        ...this.state,
        scenario: gameInfo.array,
        total: gameInfo.total
      });
    }
  }

  nextSlide = () => {
    const { gameCounter } = this.state;
    this.setState({
      ...this.state,
      response: null,
      gameOver: null,
      gameCounter: gameCounter + 1
    });
  };

  getScenario = scenario => {
    switch (scenario) {
      case Scenarios.grocery: {
        return {
          array: this.getGroceryScenario(this.props.name, this.props.character),
          total: 20
        };
      }
      case Scenarios.school: {
        return {
          array: this.getSchoolScenario(this.props.name, this.props.character),
          total: 12
        };
      }
      case Scenarios.park: {
        return {
          array: this.getParkScenario(this.props.name, this.props.character),
          total: 16
        };
      }
      case Scenarios.market: {
        return {
          array: this.getMarketScenario(this.props.name, this.props.character),
          total: 12
        };
      }
      default:
        break;
    }
  };

  render() {
    if (this.state.scenario) {
      if (this.state.scenario[this.state.gameCounter]) {
        return (
          <Row>
            <Col>
              <Row>
                <Col className="Score" md={{ size: 3, offset: 9 }}>
                  <Score points={this.state.points} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Display
                    key={this.props.character}
                    className="d-flex justify-content-center Display Img"
                    character={this.props.character}
                    emote={
                      this.state.response
                        ? this.state.response.emote
                        : this.state.scenario[this.state.gameCounter].emote
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col className="Dialog">
                  <Dialog
                    text={
                      this.state.response
                        ? this.state.response.dialog
                        : this.state.scenario[this.state.gameCounter].dialog
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Buttons
                  className="ButtonOverride"
                  buttons={
                    this.state.scenario[this.state.gameCounter].buttons
                      .length === 0
                      ? this.state.next
                      : this.state.scenario[this.state.gameCounter].buttons
                  }
                />
              </Row>
            </Col>
          </Row>
        );
      } else {
        return (
          <Row>
            <Col>
              <h1>Scenario Complete!</h1>
              <p>
                Your final score was{" "}
                <b>
                  {Number.parseFloat(
                    (this.state.points / this.state.total) * 100
                  ).toFixed(0)}
                  %
                </b>
                .
              </p>
            </Col>
          </Row>
        );
      }
    } else {
      return null;
    }
  }
}

export default Game;
