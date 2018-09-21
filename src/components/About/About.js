import React, { Component } from "react";
import boxCart from "../../img/boxCartPrev.jpeg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <p className="about-text">
          <span className="about-text__bold">Express Messenger Service</span>{" "}
          has been meeting the "On Demand" and "Scheduled" delivery requirements
          of top Florida businesses since 1985!
        </p>
        <div className="about-photo">
          <span>
            Our drivers are TSA approved and we are approved by the Federal
            Aviation Administration (FAA) for the Indirect Air Carrir Standard
            Security Program (IACSSP).
          </span>
          <img src={boxCart} alt="delivery man" />
        </div>
      </div>
    );
  }
}

export default About;
