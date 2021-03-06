import React, { Component } from 'react';
import ModalInput from './ModalInput'

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
              <div className=" bg-darkblue text-white px-5 pt-3">
                <button type="button" className="close mb-5 float-right" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="oi oi-x text-white"></span>
                </button>
                <p className="fs-small my-0">EMAIL</p>
                <h5 className="modal-title mr-auto" id="exampleModalLabel">{this.props.dealerInfo.name}</h5>

              </div>
              <div className="modal-body">
                <p className="fs-small mx-auto">Fill out the form below and {this.props.dealerInfo.name} will get in touch.</p>
                <form>
                  <ModalInput id="customerName" type="text" display="First and Last Name"/>
                  <ModalInput id="telephoneNumber" type="tel" display="Telephone Number"/>
                  <ModalInput id="emailAddress" type="text" display="Email Address"/>
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
