import React from 'react';

class Dialog extends React.Component {
  render(){
    return(
      <div className={this.props.className}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Dialog;