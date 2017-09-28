import React, { Component } from 'react';

export default class ContactModal extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="container-fluid">
        <button type="button" className="mb-4 py-2 px-4 btn btn-outline-primary rounded-1 text-darkblue mx-auto border-cyan" data-toggle="modal" data-target={"#"+ this.props.dealerInfo.companyID}>
          Contact This Pro
        </button>
        <div className="modal fade" id={this.props.dealerInfo.companyID} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-darkblue text-white">
                <p className="fs-small">EMAIL</p>
                <h5 className="modal-title" id="exampleModalLabel">{this.props.dealerInfo.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="oi oi-x text-white"></span>
                </button>
              </div>
              <div className="modal-body">
                <p className="fs-small mx-auto">Fill out the form below and {this.props.dealerInfo.name} will get in touch.</p>
                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="customerName" className="d-block mb-1">First and Last Name</label>
                    <input type="text" className="form-control" id="customerName"/>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="customerName" className="d-block mb-1">Telephone Number</label>
                    <input type="tel" className="form-control" id="telephoneNumber"/>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="customerName" className="d-block mb-1">Email Address</label>
                    <input type="email" className="form-control" id="emailAddress"/>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="comments" className="d-block mb-1">Comments or Questions</label>
                    <textarea className="form-control" id="comments" rows="3"></textarea>
                  </div>
                </form>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
  }



}
