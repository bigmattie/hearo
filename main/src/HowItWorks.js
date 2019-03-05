import React, { Component } from 'react';
// import "./Header.css";

export default class HowItWorks extends Component {
  render() {
    return (
        <div className="belowTheFold container">
            {/*Example row of columns -->*/}
            <div className="row">
                <div className="col-md-4">
                    <h2 className="number-icon">1</h2>
                    <p className="h3 font-weight-normal">Remove adhesive strip</p>
                    <p className="image-1"></p>
                </div>
                <div className="col-md-4">
                    <h2 className="number-icon">2</h2>
                    <p className="h3 font-weight-normal">Position over camera lens and push firmly in place</p>
                    <p className="image-2"></p>
                </div>
                <div className="col-md-4">
                    <h2 className="number-icon">3</h2>
                    <p className="h3 font-weight-normal">Slide to show and hide your camera</p>
                    <p className="image-3"></p>
                </div>
            </div>
        </div>
    )
  }
}
