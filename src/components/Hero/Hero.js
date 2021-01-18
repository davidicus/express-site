import React, { Component } from "react";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.heroSlide = [];
  }

  addClassToNext = (e) => {
    const current = this.heroSlide.indexOf(e.target);
    e.target.classList.remove("slidein");
    let next = current + 1;
    if (current === 2) {
      next = 0;
    }
    this.heroSlide[next].className = "slidein";
  };

  componentDidMount() {
    this.heroSlide = [
      document.getElementById("hero-slide1"),
      document.getElementById("hero-slide2"),
      document.getElementById("hero-slide3"),
    ];

    this.heroSlide.forEach((slide) => {
      slide.addEventListener("animationend", this.addClassToNext, false);
    });

    this.heroSlide[0].className = "slidein";
  }

  componentUnMount() {
    this.heroSlide.forEach((slide) => {
      slide.removeEventListener("animationend", this.addClassToNext, false);
    });
  }

  render() {
    return (
      <div className="hero">
        <h2 className="hero-header">
          <span>We Deliver</span>
          <span>For You</span>
          {/* switch out words }
          <span id="hero-slide1">Pick Up</span>
          <span id="hero-slide2">Delivery</span>
          <span id="hero-slide3">Guaranteed</span>*/}
          <span id="hero-slide1">Anything</span>
          <span id="hero-slide2">Anywhere</span>
          <span id="hero-slide3">Anytime</span>
        </h2>
        <div className="location-pointer">
          <h3>Check out our rates</h3>
        </div>
      </div>
    );
  }
}

export default Hero;
