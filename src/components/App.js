import React, { Component } from 'react';
import '../styles/App.css';

import Nav from "./Nav"
import Main from "./Main"
import Footer from "./Footer"

class App extends Component {
  render() {
    return (
      <div className="">
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
