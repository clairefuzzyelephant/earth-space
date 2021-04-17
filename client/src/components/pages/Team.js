import React from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Team.css";

function Team(props) {

  return (
    <>
      <div className="Home-container">
        <div className="Home-backgroundOverlay">
          <div className="Team-title">
            Our Team
          </div>
          <div>
            3 of us + Jeff Hoffman
          </div>
          <div>
            Extended Collaborators: Nourie
          </div>
          <div>
            Space Exploration Initative (SEI) Team
          </div>
          <div>
            Lawyers, etc.
          </div>

          <div className="Home-introText">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;