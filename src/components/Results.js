import React, { Component } from 'react';
import '../styles/App.css';

export default class Results extends Component {

  render() {
    return (
      <div className="container bg-faded">
        <div className="row">

          {this.props.dealers.map((dealer)=>{
            let data = dealer.data;
            return (
              <div key={dealer.data.companyID} className="col-md-4 card p-0">
                <p className="h4 text-center m-4">{data.name}</p>
                <button type="button" className="mx-auto mb-3 p-3 w-75 btn btn-primary rounded-0">
                  <p className="m-0">Tap To Call <b>{data.phone1}</b></p>
                </button>
                <p className="text-muted mb-3 mx-auto">Can't Talk Now? Click Below To Send An Email</p>
                <button type="button" className="mx-auto mb-4 p-3 w-50 btn btn-secondary rounded-0">
                  <p className="m-0">Contact This Pro</p>
                </button>
                <div className="d-flex flex-column justify-content-around align-items-center mb-3">
                  <b>Business Hours</b>
                  <p className="m-0">Weekdays {data.weekHours.mon}</p>
                  <p className="m-0">Saturdays {data.weekHours.sat}</p>
                  <p className="m-0">Sundays {data.weekHours.sat}</p>
                </div>
                <div className="container w-100 d-flex flex-column flex-wrap bg-faded px-5">
                  {data.certifications.map((cert)=>{
                    return <p className="text-muted">{cert}</p>
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
