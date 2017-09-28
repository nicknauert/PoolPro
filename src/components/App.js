import React, { Component } from 'react';
import Water from './Water'
import '../styles/App.css';

import Nav from "./Nav"
import Main from "./Main"

import Footer from "./Footer"

class App extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <Nav />
        <Water />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
