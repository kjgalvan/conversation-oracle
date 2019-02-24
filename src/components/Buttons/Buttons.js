import React from 'react';
import { Col, Button } from 'reactstrap';

class Buttons extends React.Component {
  render() {
    const mappedButtons = this.props.buttons.map((buttonObject, index) => (
      <Col key={buttonObject.text}>
        <Button className={this.props.className} autoFocus={(index === 0) ? true : false} style={{ width: "100%" }} key={buttonObject.text} onClick={buttonObject.onClick}>{buttonObject.text}</Button>
      </Col>
    ));

    return mappedButtons;
  }
}

export default Buttons;