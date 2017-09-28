import React, { Component } from 'react';
import '../styles/App.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid justify-content-center m-0 mt-5 p-0 footer-pos">
        <div className="bg-darkblue container-fluid text-center py-3">
          <p className="fs-xl tw-light text-white mb-1" href="#"><span className="tw-black fs-xl text-white">POOL</span>PROS</p>
          <p className="text-white tw-black fs-small d-inline mr-4">CONNECT WITH US</p><img className="social-logo" src="./img/twitter.png"/><img className="social-logo" src="./img/facebook.png"/><img className="social-logo" src="./img/youtube.png"/>
        </div>
        <div className="container-fluid bg-primary d-flex p-0 flex-column align-items-center">
          <div className="hidden-lg-up d-flex flex-row footer-b-bottom py-2">
            <a href="#" className="nav-link text-white fs-small footer-b-right p-0 px-3 m-0">Dealers and Distributors</a>
            <a href="#" className="nav-link text-white fs-small p-0 px-3 m-0">Commercial Service</a>
          </div>
          <div className="container  d-flex flex-row py-2 justify-content-center">
            <p className="text-white fs-small px-3 footer-b-right m-0">&copy; 2017 Pool Pros</p>
            <p className="text-white fs-small px-3 footer-b-right m-0">Privacy Policy</p>
            <p className="text-white fs-small px-3 m-0">Terms and Conditions</p>
          </div>
        </div>

      </div>
    );
  }
}
