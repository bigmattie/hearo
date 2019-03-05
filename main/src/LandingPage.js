import React, { Component } from 'react';
import Header from "./Header";
import AboveTheFold from "./AboveTheFold";
import HowItWorks from "./HowItWorks";

import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        { this.props.children }
        {/*Navigation Bar*/}
        <Header />
        {/*Above the Fold*/}
        <AboveTheFold/>
        {/*Info below fold*/}
        <HowItWorks/>
        {/*// /container -->*/}
        <footer className="container">
          <p>&copy; Company 2017-2018</p>
        </footer>
      </div>
    )
  }
}
