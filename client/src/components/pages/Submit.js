import React, { Component } from "react";

import "../../utilities.css";
import "./Submit.css";

class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <div className="Submit-container">
          <div className="Home-backgroundOverlay">
            <div className="Submit-title">
                        Submit your message!
            </div>
            <div className="Submit-inputSection">
                <div className="Submit-inputInfoLeft">
                    <input className="Submit-smallField" placeholder="Legal Name" />
                    <input className="Submit-smallField" placeholder="English Name (if applicable)"/>
                    <input className="Submit-smallField" placeholder="Country" />
                </div>
                <div className="Submit-inputInfoRight">
                    <input className="Submit-smallField" placeholder="Type your message here..." />
                </div>
            </div>
           
            <div className="Submit-introText">
            </div>
            <div className="Submit-submitButton">
              Send
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Submit;