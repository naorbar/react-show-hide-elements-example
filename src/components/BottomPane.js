import React, { Component } from 'react';

class BottomPane extends Component {
  render() {
    if (this.props.visible === 'true') {
      return null;
    } else {
      return (
        <div className="BottomPane">
          BOTTOM PANE
        </div>
      );
    }
  }
}

export default BottomPane;
