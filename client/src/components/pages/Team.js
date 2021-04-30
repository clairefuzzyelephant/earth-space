import React, { useEffect, useState } from "react";

import TeamPopup from "../modules/TeamPopup.js";

import "../../utilities.css";
import "./Team.css";

import claire from "../../../dist/people/claire.jpeg";
import maya from "../../../dist/people/maya.jpeg";
import lydia from "../../../dist/people/lydia.jpeg";

function Team(props) {

  const [popupStatus, setPopupStatus] = useState(false);

  const bio = "Maya Nasr is a Lebanese PhD student in the Aerospace Engineering department at MIT working on the Mars Oxygen ISRU Experiment (MOXIE) for NASA JPL’s Mars 2020 mission. She received her Bachelor's and Master's degrees in Aerospace Engineering from MIT in 2018 and 2021 respectively. She is the Policy and Congressional Legislation Leads for the SGAC US Taskforce. She’s also leading the Space Resources, Space Ethics & Human Rights subgroups with the goal of space disarmament and peaceful use of outer space. Her research interests are space systems, international space law, policy and politics, space security and disarmament.";

  useEffect(() => {
    console.log(popupStatus);
  }, [popupStatus])

  return (
    <>
      <div className="Team-container">
        <div className="Team-backgroundOverlay">
          <div className="Team-title">
            Our Team
          </div>
          <div className="Team-section">
            <div className="Team-member" onClick={e => {setPopupStatus(true); console.log("HII") }}>
              <img src={maya}/>
              <div className="Team-member-text">
                <b>Maya Nasr</b>
                <p>Project Co-Lead</p>
                <p>MIT AeroAstro PhD Candidate</p>
              </div>
            </div>
            <div className="Team-member">
              <img src={lydia} />
              <div className="Team-member-text">
                <b>Lihui Lydia Zhang</b>
                <p>Project Co-Lead</p>
                <p>MIT Technology Policy 21'</p>
              </div>
            </div>
            <div className="Team-member">
              <img src={claire} />
              <div className="Team-member-text">
                <b>Claire Cheng</b>
                <p>Web Developer</p>
                <p>MIT Class of 2022</p>
              </div>
            </div>
            <div className="Team-member">
              <img src={claire} />
              <div className="Team-member-text">
                <b>Jeffrey Hoffman</b>
                <p>Faculty Supervisor</p>
                <p>MIT Professor of Aeronautics and Astronautics</p>
              </div>
            </div>
          </div>
          <div className="Team-title">
            Space Exploration Initiative (SEI) Team
          </div>
          <div className="Team-section">
            <div className="Team-member">
              <img src={claire} />
              <div className="Team-member-text">
                <b>Xin Liu</b>
                <p>Artistic Advisor</p>
                <p>Arts Curator at the Space Exploration Initiative at the MIT Media Lab</p>
              </div>
            </div>
            <div className="Team-member">
              <img src={claire} />
              <div className="Team-member-text">
                <b>Sands A Fish</b>
                <p>Advisor</p>
                <p>MIT Professor of Aeronautics and Astronautics</p>
              </div>
            </div>
            <div className="Team-member">
              <img src={claire} />
              <div className="Team-member-text">
                <b>Ariel Ekblaw</b>
                <p>Advisor</p>
                <p>MIT Professor of Aeronautics and Astronautics</p>
              </div>
            </div>
            <div className="Team-member">
              <img src={claire} />
              <div className="Team-member-text">
                <b>Sean Auffinger</b>
                <p>Mission Integrator</p>
                <p>MIT Professor of Aeronautics and Astronautics</p>
              </div>
            </div>
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

        </div>
        <div>{popupStatus ? <TeamPopup image={maya} name="Maya Nasr" role="Project Co-lead" title="MIT AeroAstro PhD Candidate" bio={bio} closePopup={() => setPopupStatus(false)} /> : null}</div>

      </div>
    </>
  );
}

export default Team;