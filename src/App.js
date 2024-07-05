import React, { Component, Fragment } from 'react';
import './scss/App.css';
import Header from './components/Header/Header.js';
import Menu from './components/Menu/Menu.js';
import Main from './components/Main/Main.js';
import Hero from './components/Hero/Hero.js';
import About from './components/About/About.js';
import Services from './components/Services/Services.js';
import Rates from './components/Rates/Rates.js';
import Contact from './components/Contact/Contact.js';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main>
          <Hero />
          <About />
          <Services />
          <Rates />
          <Contact />
        </Main>
        <Menu />
      </Fragment>
    );
  }
}

export default App;
