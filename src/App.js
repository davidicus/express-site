import React, { Component, Fragment } from "react";
import "./scss/App.css";
import Header from "./components/Header/Header.js";
import Menu from "./components/Menu/Menu.js";
import Main from "./components/Main/Main.js";
import Hero from "./components/Hero/Hero.js";
import About from "./components/About/About.js";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main>
          <Hero />
          <About />
        </Main>
        <Menu />
      </Fragment>
    );
  }
}

export default App;
