import React from 'react';
import './Game.css';
import Dialog from '../Dialog/Dialog';
import Display from '../Display/Display';
class Game extends React.Component {
  render() {
    return (
      <div className="Game">
        
        <Display />
        <Dialog />
      </div>
    );
  }
}

export default Game;
