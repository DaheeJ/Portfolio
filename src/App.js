import React, { Component } from 'react';
import logo from './logo.svg';
import SlideChildComponent  from './junkComponents/AnimationsComponent';
import './App.css'
import Header from '../src/components/header/Header'

class App extends Component {
  render() {
    return (
      <div className="app">

        <Header insideComponent={<SlideChildComponent />} />
        
      </div>
    );
  }
}

export default App;
