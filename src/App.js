import React, { Component } from 'react';
import logo from './logo.svg';
import SlideChildComponent  from './junkComponents/AnimationsComponent';
import './App.css'
import Header from '../src/components/header/Header'
import EasyMenu from './components/demo/easyMenu/EasyMenu'


class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <Header insideComponent={<SlideChildComponent />} /> */}
        <EasyMenu/>
      </div>
    );
  }
}

export default App;
