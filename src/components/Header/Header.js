import React, { Component } from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

class Header extends Component {
  handleClick = () => {
    document.body.classList.toggle("open");
  };

  render() {
    return (
      <header className="main-header">
        <HeaderLogo />
        <HeaderNav handleClick={this.handleClick} />
      </header>
    );
  }
}

export default Header;
