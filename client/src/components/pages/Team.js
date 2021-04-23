import React from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Team.css";

import claire from "../../../dist/claire.jpeg";

function Team(props) {

  return (
    <>
      <div className="Team-container">
        <div className="Team-backgroundOverlay">
          <div className="Team-title">
            Our Team
          </div>
          <div className="Team-section">
            <div className="Team-member">
              <img src={claire} />
              <b>Claire Cheng</b>
              <p>Web Developer</p>
            </div>
            <div className="Team-member">
              <img src={claire} />
              <b>Claire Cheng</b>
              <p>Web Developer</p>
            </div>
            <div className="Team-member">
              <img src={claire} />
              <b>Claire Cheng</b>
              <p>Web Developer</p>
            </div>
            <div className="Team-member">
              <img src={claire} />
              <b>Claire Cheng</b>
              <p>Web Developer</p>
            </div>
          </div>
          <div className="Team-title">
            Space Exploration Initiative (SEI) Team
          </div>
          <div className="Team-section">
            <img src={claire} />
            <img src={claire} />
            <img src={claire} />
            <img src={claire} />
          </div>
          <div className="Team-title">
            Additional Collaborators and Legal
          </div>
          <div className="Team-section">
            <img src={claire} />
            <img src={claire} />
            <img src={claire} />
            <img src={claire} />
          </div>

          <div className="Home-introText">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;