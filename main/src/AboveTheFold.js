import React, { Component } from 'react';
// import "./Header.css";

export default class AboveTheFold extends Component {
  render() {
    return (
        <div className="aboveTheFold position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
            <div className="col p-lg-5 mx-auto my-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 cta">
                            <h1 className="display-2 font-weight-bold text-white">Relax.</h1>
                            <p className="lead display-4 font-weight-normal text-white">No one can see you.
                            <br /> We've got you covered.</p>
                            <p className="lead text-white">TrueMute is here to protect your privacy.</p>
                            <a className="primary-btn btn-outline-secondary" href="#">Learn More</a>
                        </div>
                        <div className="col-md-6 alexaImage"></div>
                    </div>
                </div>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
    )
  }
}
