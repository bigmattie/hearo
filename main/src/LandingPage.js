import React, { Component } from 'react';
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        { this.props.children }
         {/*Navigation Bar*/}
        <nav class="site-header sticky-top py-1">
          <div class="container d-flex flex-column flex-md-row justify-content-between">
            <a class="py-2" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"
                   focusable="false" role="img">
                  <title>Product</title>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                  <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                  <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                  <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                  <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                  <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
              </svg>
            </a>
            <a class="py-2 d-none d-md-inline-block" href="#">Tour</a>
            <a class="py-2 d-none d-md-inline-block" href="#">How it Works</a>
            <a class="py-2 d-none d-md-inline-block" href="#">Features</a>
            <a class="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
            <a class="py-2 d-none d-md-inline-block" href="#">Support</a>
            <a class="py-2 d-none d-md-inline-block" href="#">Pricing</a>
            <a class="py-2 d-none d-md-inline-block" href="#">Help</a>
          </div>
        </nav>
        {/*Above the Fold*/}
        <div class="aboveTheFold position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
          <div class="col p-lg-5 mx-auto my-5">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-6 cta">
                        <h1 className="display-2 font-weight-bold text-white">Hear-O</h1>
                          <p class="lead display-4 font-weight-normal text-white">prevent Alexa from listening and recording your conversations</p>
                          <p class="lead text-white">Turn on the hearo to prevent your Alexa <i>(or smart device)</i> from unwanted recording</p>
                        <a className="btn btn-outline-secondary" href="#">Learn More</a>
                      </div>
                      <div class="col-md-6 alexaImage"></div>
                  </div>
              </div>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
        {/*Info below fold*/}
        <div className="belowTheFold container">
              {/*Example row of columns -->*/}
            <div className="row">
              <div className="col-md-4">
                <h2>Problem the resonates the most</h2>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                  mollis euismod. Donec sed odio dui. </p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
              <div className="col-md-4">
                  <h2>Problem the resonates the most</h2>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                  mollis euismod. Donec sed odio dui. </p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
              <div className="col-md-4">
                  <h2>Problem the resonates the most</h2>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula
                  porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
                  ut fermentum massa justo sit amet risus.</p>
                <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
              </div>
            </div>



          </div>
          {/*// /container -->*/}



        <footer className="container">
          <p>&copy; Company 2017-2018</p>
        </footer>

      </div>
    )
  }
}
