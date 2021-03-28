import React, { Component } from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <div className="Home-container">
          <div className="Home-backgroundOverlay">
            <div className="Home-title">
              Insert Project Name Here
            </div>
            <div className="Home-introText">
              In a year of unending crises, MIT sends—for the first time from space—messages of peace and unity in various languages representing all countries around the world using MIT Nanotechnology!
              Space is a "space" for everyone!
              Send your message of peace to space!
            </div>
            <div className="Home-buttonContainer">
              <Link to="/submit" className="Home-submitButton">
                  Submit
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
