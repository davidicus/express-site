import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-form form" />
        <div className="menu-container">
          <nav className="menu-nav">
            <ul className="menu-nav-list">
              <li className="menu-nav-items">
                <a className="menu-nav-anchors">Services</a>
              </li>
              <li className="menu-nav-items">
                <a className="menu-nav-anchors">Rates</a>
              </li>
              <li className="menu-nav-items">
                <a className="menu-nav-anchors">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Menu;
