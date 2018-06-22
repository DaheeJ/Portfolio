import React, { Component } from 'react';
import logo from './logo.svg';
import SlideChildComponent  from './junkComponents/AnimationsComponent';
import './App.css'
import Header from '../src/components/header/Header'
import EasyMenu from './components/demo/easyMenu/EasyMenu'
import ColorMenu from './components/demo/colorfulMenu/ColorMenu'
import 'bulma/css/bulma.css'
import MenuBar from './components/demo/menuBar/MenuBar'
import HomeInfo from './components/demo/HomeInfo/aboutHome'
import Photo from './components/demo/photo/Photo'

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <Header insideComponent={<SlideChildComponent />} /> */}
        {/* <EasyMenu/> */}
        {/* < ColorMenu  /> */}
        {/* < MenuBar /> */}
        {/* < HomeInfo /> */}
        < Photo />
      </div>
    );
  }
}

export default App;
