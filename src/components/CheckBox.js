import React, { Component } from 'react';

export default class CheckBox extends Component {

  render(){
    return(
      <div className="form-check mr-4 mb-3">
        <label className="form-check-label">
        <input className="form-check-input mr-2 align-text-top" onChange={this.props.onChange} type="checkbox" name={this.props.name}/>{this.props.name}</label>
      </div>
    )
  }
}
