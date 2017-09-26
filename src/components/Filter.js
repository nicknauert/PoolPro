import React, { Component } from 'react';
import Results from './Results'
import dealers from '../dealers'
import CheckBox from "./CheckBox"
import '../styles/App.css';

export default class Filter extends Component {

  constructor(){
    super();
    this.state = {
      dealers: dealers.dealers,
      filters: [],
      displayDealers: []
    }
  }


///////////////  onChange Function  //////////////////////////

  _handleChange = (evt) => {
    let evtName = evt.target.name;
    let oldFilters = this.state.filters;
    if(evt.target.checked){
      oldFilters.push(evtName);
      this.setState({
        filters: oldFilters
      })
    } else {
      let index = oldFilters.indexOf(evtName);
      oldFilters.splice(index, 1);

      this.setState({
        filters: oldFilters
      })
    }
    this.handleFilters(this.state.dealers)
  }



////////////////  Filter Function Chain   /////////////////////////


  handleFilters = (allDealers)=>{
    let filteredDealers = this.filterDealers(allDealers);
    this.setState({
      displayDealers: filteredDealers
    })
  }

  filterDealers = (allDealers)=>{
    const filters = this.state.filters;
    let filteredDealers = allDealers.filter((dealer)=>{
      return this.checkCerts(dealer.data.certifications, filters)
    })

    return filteredDealers;
  }

  checkCerts = (certs, filters)=>{
    return certs.some(cert => filters.includes(cert))
  }



////////////////////LIFE CYCLES/////////////////////


  componentDidUpdate(){
    console.log(this.state.filters, this.state.displayDealers);
  }


  render() {
    return (
      <div>
        <div className="bg-faded p-3">
          <div className="d-flex flex-row justify-content-end align-items-baseline">
            <p className="text-primary mr-auto">{this.state.displayDealers.length} dealers in 29418</p>
            <p className="mr-2">Filter Results</p>
            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#resultsFilter" aria-expanded="false" aria-controls="resultsFilter"><span className="oi oi-chevron-bottom"></span></button>
          </div>
          <div className="collapse" id="resultsFilter">
            <CheckBox key="Commercial Pro" onChange={this._handleChange} name="Commercial Pro"/>
            <CheckBox key="Residential Pro" onChange={this._handleChange} name="Residential Pro"/>
            <CheckBox key="Installation Pro" onChange={this._handleChange} name="Installation Pro"/>
            <CheckBox key="Service Pro" onChange={this._handleChange} name="Service Pro"/>
          </div>
        </div>
        <Results key="" dealers={this.state.displayDealers}/>
      </div>

    );
  }
}

/*
<div className="form-check">
  <label className="form-check-label">
    <input className="form-check-input mr-2" type="checkbox" name="Service Pro" onChange={this._handleChange}/>Service</label>
</div>
<div className="form-check">
  <label className="form-check-label">
  <input className="form-check-input mr-2" onChange={this._handleChange} type="checkbox" name="Installation Pro"/>Installation</label>
</div>
<div className="form-check">
  <label className="form-check-label">
  <input className="form-check-input mr-2" onChange={this._handleChange} type="checkbox" name="Residential Pro"/>Residential</label>
</div>
<div className="form-check">
  <label className="form-check-label">
  <input className="form-check-input mr-2" onChange={this._handleChange} type="checkbox" name="Commercial Pro"/>Commercial</label>
</div>
*/
