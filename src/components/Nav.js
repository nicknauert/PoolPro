import React, { Component } from 'react';
import '../styles/App.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="bg-primary">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a href="#" className="nav-link text-white">Dealers and Distributors</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">Commercial Service</a>
            </li>
          </ul>
        </div>
        <ul className="nav justify-content-center p-5">
          <li className="nav-item">
            <a href="#" className="nav-link">Pools & Spas</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Supplies</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Resources</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <button href="#" className="btn btn-primary">Find A Pool Pro</button>
          </li>
        </ul>
      </div>
    );
  }
}

/*
<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Navbar</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-md-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
*/
