import React, { Component } from 'react';
import '../styles/App.css';

export default class Filter extends Component {
  render() {
    return (
      <div className="bg-faded p-3">
        <div className="d-flex flex-row justify-content-end align-items-baseline">
          <p className="text-primary mr-auto">7 dealers in 29418</p>
          <p className="mr-2">Filter Results</p>
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#resultsFilter" aria-expanded="false" aria-controls="resultsFilter">v</button>
        </div>

        <div className="collapse" id="resultsFilter">
          <div className="form-check">
            {/* <label class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input"/>
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Service</span>
              </label> */}
            <label class="custom-control custom-checkbox">
              <input class="form-check-input mr-3" type="checkbox" name="service" value="Service Pro"/>Service</label>
          </div>
          <div className="form-check">
            <label class="form-check-label">
            <input class="form-check-input mr-1" type="checkbox" name="installation" value="Installation Pro"/>Installation</label>
          </div>
          <div className="form-check">
            <label class="form-check-label">
            <input class="form-check-input mr-1" type="checkbox" name="residential" value="Residential Pro"/>Residential</label>
          </div>
          <div className="form-check">
            <label class="form-check-label">
            <input class="form-check-input mr-1" type="checkbox" name="commercial" value="Commercial Pro"/>Commercial</label>
          </div>
        </div>
      </div>

    );
  }
}
