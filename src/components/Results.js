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
              <div key={dealer.data.companyID} className="col-md-6 col-lg-4 collapse card p-0">
                <p className="h4 text-center my-4 mx-1 tw-light">{data.name}</p>
                <button type="button" className="mx-auto mb-3 py-1 px-2 btn btn-primary rounded-0">
                  <p className="m-0 fs-small">Tap To Call <span className="tw-black">{data.phone1}</span></p>
                </button>
                <p className="text-muted mb-3 mx-auto fs-small font-italic">Can't Talk Now? Click Below To Send An Email</p>
                <ContactModal dealerInfo={dealer.data}/>

                <div className="d-flex flex-column justify-content-around align-items-center mb-3">
                  <b>Business Hours</b>
                  <p className="m-0">Weekdays {data.weekHours.mon}</p>
                  <p className="m-0">Saturdays {data.weekHours.sat}</p>
                  <p className="m-0">Sundays {data.weekHours.sat}</p>
                </div>
                <div className="container w-100 d-flex flex-row flex-wrap bg-faded px-5 py-2 mt-auto">
                  {data.certifications.map((cert)=>{
                    return <p className="text-muted w-50">{cert}</p>
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
