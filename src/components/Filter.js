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
      displayDealers: [],
      caret: "oi oi-caret-bottom fs-small"
    }
  }


  caretSwitch = ()=>{
    let caret = this.state.caret;
    if(caret === "oi oi-caret-bottom fs-small"){
      this.setState({
        caret: "oi oi-caret-top fs-small"
      })
    } else {
      this.setState({
        caret: "oi oi-caret-bottom fs-small"
      })
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

  componentDidMount(){
    this.setState({
      displayDealers: this.state.dealers
    })
  }

  render() {
    return (
      <div className="px-md-5 mx-md-5">

        <div className="bg-faded p-3 hidden-lg-up px-4">
          <div className="d-flex flex-row justify-content-end align-items-baseline mb-0">
            <p className="text-primary mr-auto mb-0 pb-0">{this.state.displayDealers.length} dealers in 29418</p>
            <div className="d-flex flex-row flex-nowrap justify-content-center align-items-end border-light bg-white p-0 m-0">
              <p className="mx-2 my-1 bg-white">Filter Results</p>
              <button className="btn btn-outline-secondary ol-0 rounded-0 h-100 border-right-0 border-top-0 border-bottom-0" type="button" data-toggle="collapse" data-target="#resultsFilter" aria-expanded="false" aria-controls="resultsFilter" onClick={this.caretSwitch}><span className={this.state.caret}></span></button>
            </div>
          </div>

          <div className="collapse container-fluid bg-white px-3 py-4 border-light" id="resultsFilter">
            <CheckBox key="Commercial Pro" onChange={this._handleChange} name="Commercial Pro"/>
            <CheckBox key="Residential Pro" onChange={this._handleChange} name="Residential Pro"/>
            <CheckBox key="Installation Pro" onChange={this._handleChange} name="Installation Pro"/>
            <CheckBox key="Service Pro" onChange={this._handleChange} name="Service Pro"/>
          </div>

        </div>

        <div className="bg-faded container-fluid py-2 py-0 hidden-md-down mb-md-4">

          <div className="d-flex flex-row justify-content-center mt-0 mt-md-3">
            <p className="text-primary filter-b-right pr-4 py-0">{this.state.displayDealers.length} dealers in 29418</p>
            <div className="d-flex ml-4 align-items-baseline py-0">
              <p className="text-darblue mr-4 tw-black py-0 fs-med">Filter Results</p>
              <CheckBox key="Commercial Pro" onChange={this._handleChange} name="Commercial Pro"/>
              <CheckBox key="Residential Pro" onChange={this._handleChange} name="Residential Pro"/>
              <CheckBox key="Installation Pro" onChange={this._handleChange} name="Installation Pro"/>
              <CheckBox key="Service Pro" onChange={this._handleChange} name="Service Pro"/>
            </div>
          </div>

        </div>
        <Results key='' dealers={this.state.displayDealers}/>
      </div>
    );
  }
}
