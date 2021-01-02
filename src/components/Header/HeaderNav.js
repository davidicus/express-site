import React from "react";

const HeaderNav = ({ handleClick }) => (
  <nav className="main-header-nav">
    <ul className="main-header-nav-list">
      <li className="main-header-nav-items">
        <a
          data-type="delivery"
          href="#contact"
          // onClick={handleClick}
          className="main-header-nav-anchors modal-toggle"
        >
          Schedule a delivery
        </a>
      </li>
      <li className="main-header-nav-items menu-toggle" onClick={handleClick}>
        <span className="main-header-nav-tab" />
      </li>
    </ul>
  </nav>
);

export default HeaderNav;
