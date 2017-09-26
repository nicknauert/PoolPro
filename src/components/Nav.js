import React, { Component } from 'react';
import '../styles/App.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="">
        <div className="bg-primary hidden-md-down">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a href="#" className="nav-link text-white">Dealers and Distributors</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">Commercial Service</a>
            </li>
          </ul>
        </div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-white">
          <button className="navbar-toggler navbar-toggler-right rounded-left" type="button" data-toggle="collapse" data-target="#poolBar" aria-controls="poolBar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Pool Pros</a>

          <div className="collapse navbar-collapse" id="poolBar">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
              <li className="hidden-md-up">
                <p className="text-primary text-center" href="#">Menu</p>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pools & Spas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Supplies</a>
                <i className="fa fa-arrow-right pull-right hidden-md-up" aria-hidden="true"></i>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Resources</a>
                <i className="fa fa-arrow-right pull-right hidden-md-up" aria-hidden="true"></i>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
                <i className="fa fa-arrow-right pull-right hidden-md-up" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    );
  }
}

/*

<div className="navbar navbar-toggleable-md p-5">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#">Pool Pros</a>
  <div className="collapse navbar-collapse" id="navbarToggle">
    <ul className="navbar-nav mr-auto mt-2 mt-md-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <button href="#" className="btn btn-primary">Find A Pool Pro</button>
  </div>

</div>



*/
