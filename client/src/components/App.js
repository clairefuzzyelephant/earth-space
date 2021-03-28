import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import Submit from "./pages/Submit.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <Router>
          <Home
            path="/"
          />
          <Submit 
            path="/submit"
          />
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
