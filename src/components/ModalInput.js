import React, { Component } from 'react';

export default class ModalInput extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div className="form-group mb-3">
        <label htmlFor={this.props.id} className="d-block mb-1">{this.props.display}</label>
        <input type={this.props.type} className="form-control" id={this.props.id}/>
      </div>
    )
  }
}
