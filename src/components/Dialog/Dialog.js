import React from 'react';

class Dialog extends React.Component {
  render(){
    return(
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Dialog;