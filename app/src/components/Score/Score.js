import React from 'react';

class Score extends React.Component {
  render() {
    return (
      <p>Score: {this.props.points}</p>
    );
  }
}

export default Score;