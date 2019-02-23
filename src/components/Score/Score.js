import React from 'react';

class Score extends React.Component {
  render() {
    return (
      <p>{this.props.points}</p>
    );
  }
}

export default Score;