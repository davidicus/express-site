import React, { Component } from "react";

class HeaderNav extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <nav className="main-header-nav">
        <ul className="main-header-nav-list">
          <li className="main-header-nav-items">
            <a className="main-header-nav-anchors">Schedule a delivery</a>
          </li>
          <li className="main-header-nav-items">
            <a className="main-header-nav-anchors">Become a driver</a>
          </li>
          <li
            className="main-header-nav-items menu-toggle"
            onClick={handleClick}
          >
            <span className="main-header-nav-tab" />
          </li>
        </ul>
      </nav>
    );
  }
}

export default HeaderNav;
