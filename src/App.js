import React, { Component, Fragment } from "react";
import "./scss/App.css";
import Header from "./components/Header/Header.js";
import Menu from "./components/Menu/Menu.js";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Menu />
      </Fragment>
    );
  }
}

export default App;
