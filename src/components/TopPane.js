import React, { Component } from 'react';

class TopPane extends Component {

  render() {
    /* Use callback function to update the show/hide flag in App.js: */
    return (
      <div className="TopPane">
        TOP PANE
        <button onClick={this.props.toggleShowOrHide}>TOGGLE SHOW/HIDE</button>
      </div>
    );
  }
}

export default TopPane;
