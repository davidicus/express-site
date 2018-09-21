import React, { Component } from "react";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount() {
    const listener = e => {
      const current = heroSlide.indexOf(e.target);
      e.target.classList.remove("slidein");
      let next = current + 1;
      if (current === 2) {
        next = 0;
      }
      heroSlide[next].className = "slidein";
      // document.querySelector(".slidein").classList.remove('slideIn');

      //
    };

    const heroSlide = [
      document.getElementById("hero-slide1"),
      document.getElementById("hero-slide2"),
      document.getElementById("hero-slide3")
    ];

    heroSlide.forEach(slide => {
      slide.addEventListener("animationend", listener, false);
    });

    heroSlide[0].className = "slidein";
  }

  render() {
    return (
      <div className="hero">
        <h2 className="hero-header">
          <span>One</span>
          <span>Hour</span>
          {/* switch out words }*/}
          <span id="hero-slide1">Pick Up</span>
          <span id="hero-slide2">Delivery</span>
          <span id="hero-slide3">Guaranteed</span>
        </h2>
        <div className="location-pointer">
          <h3>Check out our rates</h3>
        </div>
      </div>
    );
  }
}

export default Hero;
