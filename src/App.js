import React, { Component } from 'react';
import TopPane from './components/TopPane';
import BottomPane from './components/BottomPane';
import './App.css';

var isVisible = 'true';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: isVisible
    }
  }

  /* This is the callback function which updates the show/hide flag: */
  toggle() {
    console.log("IN APP: Button was clicked in child TopPane.js");
    console.log("BEFORE: " + isVisible);
    (isVisible === 'true') ? isVisible='false' : isVisible='true';
    console.log("AFTER: " + isVisible);
    this.setState({
      isVisible: isVisible
    });
  }

  render() {
    return (
      <div className="App">
        <TopPane toggleShowOrHide={() => this.toggle()}/>
        <BottomPane visible={isVisible}/>
      </div>
    );
  }
}

export default App;
