import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import Modal from '../Modal/Modal.js';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      type: 'Delivery',
      modalShown: false,
    };
  }
  handleClick = (e) => {
    const target = e.target;
    if (target.classList.contains('menu-toggle')) {
      document.body.classList.toggle('open');
    } else if (target.classList.contains('modal-toggle')) {
      this.setState((prevState) => {
        return {
          type: target.getAttribute('data-type'),
          modalShown: !prevState.modalShown,
        };
      });
      document.body.classList.toggle('modal-open');
    }
  };

  render() {
    return (
      <Fragment>
        <a
          className="header-review-link"
          href="https://g.page/r/CThdCVNZHxrWEAI/review"
        >
          Add a <span>review</span> on Google for a <b>FREE</b> local delivery
        </a>
        <header className="main-header">
          <HeaderLogo />
          <HeaderNav handleClick={this.handleClick} />
        </header>
        <ReactCSSTransitionGroup
          transitionName="modal"
          transitionAppear={true}
          transitionAppearTimeout={250}
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          {this.state.modalShown ? (
            <Modal
              key={'modal'}
              shown={this.state.modalShown}
              type={this.state.type}
              handleClick={this.handleClick}
            />
          ) : null}
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default Header;
