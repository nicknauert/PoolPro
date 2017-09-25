import React, { Component } from 'react';
import '../styles/App.css';

export default class Results extends Component {
  render() {
    return (
      <div className="container bg-faded">
        <div className="row">

          {/*  Map results here */}
          <div className="col-md-4 card p-0">
            <p className="h4 text-center m-4">Aqua Experts</p>
            <button type="button" className="mx-auto mb-3 p-3 w-75 btn btn-primary rounded-0">
              <p className="m-0">Tap To Call <b>1.888.8888</b></p>
            </button>
            <p className="text-muted mb-3 mx-auto">Can't Talk Now? Click Below To Send An Email</p>
            <button type="button" className="mx-auto mb-4 p-3 w-50 btn btn-secondary rounded-0">
              <p className="m-0">Contact This Pro</p>
            </button>
            <div className="d-flex flex-column justify-content-around align-items-center mb-3">
              <b>Business Hours</b>
              <p className="m-0">Weekdays 7:00am - 7:00pm</p>
              <p className="m-0">Saturdays 7:00am - 3:00pm</p>
              <p className="m-0">Sundays CLOSED</p>
            </div>
            <div className="container w-100 d-flex flex-column flex-wrap bg-faded px-5">
              <p className="text-muted">Installation Pro</p>
              <p className="text-muted">Service Pro</p>
              <p className="text-muted">Residential Pro</p>
              <p className="text-muted">Commercial Pro</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
