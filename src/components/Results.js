import React, { Component } from 'react';
import ContactModal from './ContactModal'
import '../styles/App.css';

export default class Results extends Component {


  render() {
    return (
      <div className="container">
        <div className="row">

          {this.props.dealers.map((dealer)=>{
            let data = dealer.data;
            return (
              <div key={dealer.data.companyID} className="col-md-6 col-lg-4 card p-0 shadow">
                <p className="h4 text-center my-4 mx-1 tw-light">{data.name}</p>
                <button type="button" className="mx-auto mb-3 py-1 px-2 btn btn-primary rounded-0 hidden-lg-up">
                  <p className="m-0 fs-small"><span className="oi oi-phone mr-1"></span>Tap To Call <span className="tw-black">{data.phone1}</span></p>
                </button>
                <div className="mx-auto mb-3 py-1 px-2 rounded-0 hidden-md-down">
                  <p className="m-0 tw-black"><span className="oi oi-phone mr-1 p-2 text-white bg-primary"></span>{data.phone1}</p>
                </div>
                <p className="text-muted mb-3 mx-auto fs-small font-italic">Can't Talk Now? Click Below To Send An Email</p>
                <ContactModal dealerInfo={dealer.data}/>

                <div className="d-flex flex-column justify-content-around align-items-center mb-5">
                  <b>Business Hours</b>
                  <p className="m-0">Weekdays {data.weekHours.mon}</p>
                  <p className="m-0">Saturdays {(data.weekHours.sat==="") ? "- CLOSED" : data.weekHours.sat}</p>
                  <p className="m-0">Sundays {(data.weekHours.sun==="") ? "- CLOSED" : data.weekHours.sun}</p>
                </div>
                <div className="container w-100 d-flex flex-row flex-wrap bg-faded px-5 py-2 mt-auto">
                  {data.certifications.map((cert)=>{
                    return <p key={cert} className="text-muted w-50">{cert}</p>
                  })}
                </div>
              </div>
            )
          })}

        </div>
      </div>
    );
  }
}
