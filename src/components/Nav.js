import React, { Component } from 'react';
import '../styles/App.css';

export default class Nav extends Component {


  render() {
    return (
      <div className="sticky-top shadow mb-4">
        <div className="bg-darkblue hidden-md-down px-5">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a href="#" className="nav-link text-white fs-small">Dealers and Distributors</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white fs-small">Commercial Service</a>
            </li>
          </ul>
        </div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-white py-3 px-md-5 px-0">
          <button className="navbar-toggler navbar-toggler-right rounded-left mt-1" type="button" data-toggle="collapse" data-target="#poolBar" aria-controls="poolBar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <p className="navbar-brand m-0 ml-4 fs-xl pl-4 text-darkblue" href="#"><img src="./img/logo.png" className="nav-logo" /></p>
          <div className="collapse navbar-collapse" id="poolBar">
            <ul className="navbar-nav ml-auto mt-2 mt-md-0 hidden-md-down">
              <li className="nav-item my-1 mr-3">
                <a className="nav-link text-primary fs-small" href="#">Pools & Spas</a>
              </li>
              <li className="nav-item my-1 mr-3">
                <a className="nav-link text-primary fs-small" href="#">Supplies</a>
              </li>
              <li className="nav-item my-1 mr-3">
                <a className="nav-link text-primary fs-small" href="#">Resources</a>

              </li>
              <li className="nav-item my-1 mr-3">
                <a className="nav-link text-primary fs-small pr-4" href="#">Services</a>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto nav-border mt-0 hidden-lg-up border-cyan">
              <p className="text-primary text-center my-3">MENU</p>
              <li className="nav-item nav-link-border p-2 bg-faded">
                <a className="nav-link">Pools & Spas<span className="oi oi-chevron-right float-right color-cyan"></span></a>
              </li>
              <li className="nav-item nav-link-border p-2 bg-faded">
                <a className="nav-link w-100">Supplies<span className="oi oi-chevron-right float-right color-cyan"></span></a>
              </li>
              <li className="nav-item nav-link-border p-2 bg-faded">
                <a className="nav-link">Resources<span className="oi oi-chevron-right float-right color-cyan"></span></a>
              </li>
              <li className="nav-item nav-link-border p-2 bg-faded">
                <a className="nav-link">Services<span className="oi oi-chevron-right float-right color-cyan"></span></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
