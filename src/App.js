import React, { Component } from 'react';
import logo from './logo.svg';
import SlideChildComponent  from './junkComponents/AnimationsComponent';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">

        <SlideChildComponent />
        
      </div>
    );
  }
}

export default App;
