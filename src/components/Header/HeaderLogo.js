import React, { Component } from 'react';

class HeaderLogo extends Component {
  render() {
    return (
      <h1 className="main-header-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92">
          <path
            id="logo"
            d="M1 87.4V1h84L51.88 45.64 71.8 73H61.48l-15.6-20.16-20.16 25.88h8.64L46.12 63.6l12.24 15.84h26.16l-25.2-32.88L90.76 4.32v85.92H7l33.12-45.12L19.48 18H31l14.88 20.72 20.16-27.4h-7.92l-12 15.84-12.48-16.08H7L32.24 45.4z"
            fill="none"
            stroke="#2d6eb6"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        </svg>
        <img
          alt="Express Messenger Logo"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/65463/ExpressLogoXColor.png"
        />
        <span>Express</span>
        <span>Messenger</span>
      </h1>
    );
  }
}

export default HeaderLogo;
