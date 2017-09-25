import React, { Component } from 'react';
import '../styles/App.css';
import Filter from "./Filter"
import Results from "./Results"

export default class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Filter/>
        <Results/>
      </div>
    );
  }
}
