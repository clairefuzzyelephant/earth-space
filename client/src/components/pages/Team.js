import React, { useEffect, useState } from "react";

import TeamPopup from "../modules/TeamPopup.js";

import "../../utilities.css";
import "./Team.css";

import claire from "../../../dist/people/claire.jpeg";
import maya from "../../../dist/people/maya.jpeg";
import lydia from "../../../dist/people/lydia.jpeg";
import jeff from "../../../dist/people/jeff.jpeg";
import xin from "../../../dist/people/xin.jpeg";
import ariel from "../../../dist/people/ariel.jpeg";
import placeholder from "../../../dist/people/placeholder.jpeg";
import georgios from "../../../dist/people/georgios.jpeg";
import craig from "../../../dist/people/craig.jpeg";
import sean from "../../../dist/people/sean.jpeg";
import mitnano from "../../../dist/people/mitnano.png";

import Footer from "../modules/Footer.js";

function Team(props) {

  const [popupStatus, setPopupStatus] = useState(false);
  const [popupPerson, setPopupPerson] = useState(null);

  const teamLeads = [
      {"img": maya, "name": "Maya Nasr", "role": "Project Co-Lead", "title": "MIT AeroAstro PhD Candidate", "bio": "Maya Nasr is a Lebanese PhD student in the Aerospace Engineering department at MIT working on the Mars Oxygen ISRU Experiment (MOXIE) for NASA JPL’s Mars 2020 mission. She received her Bachelor's and Master's degrees in Aerospace Engineering from MIT in 2018 and 2021 respectively. She is the Policy and Congressional Legislation Leads for the SGAC US Taskforce. She’s also leading the Space Resources, Space Ethics & Human Rights subgroups with the goal of space disarmament and peaceful use of outer space. Her research interests are space systems, international space law, policy and politics, space security and disarmament."},
      {"img": lydia, "name": "Lihui Lydia Zhang", "role": "Project Co-Lead", "title": "MIT Technology Policy '21", "bio": "Lihui Lydia Zhang is a recent graduate of the MIT Technology and Policy Program and a Ph.D. candidate in MIT’s Department of Aeronautics and Astronautics. Lihui grew up in Shenzhen, China and received her B.S. from Smith College in 2018. Her interdisciplinary background in astronomy and economics has led her to a variety of research topics and interests, including international space collaboration and space for Earth’s sustainable development."},
      {"img": claire, "name": "Claire Cheng", "role": "Web Developer", "title": "MIT Computer Science and Music '22", "bio": "Claire Cheng is an undergraduate at MIT studying 6-3 (computer science) and 21M-1 (music), and is a SHASS Burchard Scholar, MIT Arts Scholar, and Emerson Scholar for piano performance. She teaches for web.lab, MIT's Web Programming Competition class, and also choreographs for MIT Asian Dance Team (ADT). In her free time, she enjoys making instrumental covers, writing short fiction, building cool websites, and learning new dances."},
      {"img": jeff, "name": "Jeffrey Hoffman", "role": "Faculty Supervisor", "title": "MIT Professor of Aeronautics and Astronautics", "bio": "Dr. Jeffrey Hoffman is a professor in MIT’s Aeronautics and Astronautics Department. He received a BA in Astronomy (summa cum laude) from Amherst College (1966); a PhD in Astrophysics from Harvard University (1971); and an MSc in Materials Science from Rice University (1988). As a NASA astronaut (1978-1997) Dr. Hoffman made five space flights, becoming the first astronaut to log 1000 hours of flight time aboard the Space Shuttle. He was a member of the spacewalking team that repaired the optics of the Hubble Space Telescope. His primary research interests are in improving the technology of space suits and designing innovative space systems for human and robotic space exploration. Dr. Hoffman is director of the Massachusetts Space Grant Consortium. He is Deputy Principal Investigator of the Mars2020 MOXIE experiment, which will produce oxygen on the surface of Mars. In 2007, Dr. Hoffman was elected to the US Astronaut Hall of Fame."},
  ]

  const additionalCollabs = [
    {"img": placeholder, "name": "Nourie Flayhan", "role": "Artist", "title": "", "bio": ""},
  ]

  const sei = [
      {"img": xin, "name": "Xin Liu", "role": "Artistic Advisor", "title": "Arts Curator at the MIT Space Exploration Initiative", "bio": "Xin Liu is an artist and engineer. \n\n In her practice, Xin creates experiences/experiments to take measurements in our personal, social and technological spaces in a post-metaphysical world and examines its discourse-power nexus.Her recent research and interest center around the verticality of space, extraterrestrial explorations and cosmic metabolism. \n\n Xin is the Arts Curator in the Space Exploration Initiative in MIT Media Lab, an artist-in-residence in SETI Institute, a member of the inaugural ONX studio program founded by New Museum and Onassis NY. She is recipient of numerous awards,  including Forbes 30 under 30 Asia, X Museum Triennial Award, the Van Lier Fellowship from Museum of Arts and Design, Sundance New Frontier Story Lab fellowship, inaugural Europe ARTificial Intelligence Lab residency, SXSW Interactive Innovation Award, Core 77 Interaction Design Award, Fast Company Innovation by Design Award and Creative Capital On Our Radar. She has been commissioned by M+ Museum (Hong Kong), Ars Electronica (Austria), Rhizome (USA), Media Art Xploration Festival (USA) and Onassis Enter Program (US). She has joined several residency programs including Queens Museum Artist Studio program, New INC and Pioneer Works.  She is also an advisor for LACMA Art+Tech Lab and a faculty member at The Terraforming, a new research program at Strelka Institute in 2020-2021."},
      {"img": ariel, "name": "Ariel Ekblaw", "role": "Advisor", "title": "Director of the MIT Space Exploration Initiative", "bio": "Ariel Ekblaw is the founder and Director of the MIT Space Exploration Initiative, a team of over 50 graduate students, staff, and faculty actively prototyping the artifacts of our sci-fi space future. Founded in 2016, the Initiative includes a portfolio of 40+ research projects focused on life in space, and supports an accelerator-like R&D program for payload development and flight testing across MIT. For the Initiative, Ariel drives space-related research across science, engineering, art, and design, and charters an annually recurring cadence of parabolic flights, sub-orbital, and orbital launch opportunities.  Ariel graduated with a B.S. in Physics, Mathematics and Philosophy from Yale University and defended her MIT PhD in autonomously self-assembling space architecture for future habitats and space stations in orbit around the Earth, Moon, and Mars. Ariel’s work has been featured in WIRED (March 2020 cover story), MIT Technology Review, Harvard Business Review, the Wall Street Journal, the BBC, CNN, NPR, IEEE and AIAA proceedings, and more. Humanity stands on the cusp of interplanetary civilization and space is our next, grand frontier. This opportunity to design our interplanetary lives beckons to us—Ariel strives to bring our space exploration future to life."},
      {"img": sean, "name": "Sean Auffinger", "role": "Mission Integrator of the MIT Space Exploration Initiative", "title": "Mission Integrator at the Space Exploration Initiative at the MIT Media Lab ", "bio": "Sean serves as Mission Integrator for the Space Exploration Initiative. \n\n Sean brings with him experience working on many different aircraft programs from his time at Boeing Research and Technology. \n\n As Mission Integrator, Sean works intimately with all different research projects across the SEI and MIT community to make sure they are flight ready, advising on technical requirements, design decisions, and flight operations, as well as filling in on engineering support as needed. \n\n Alongside his Mission integrator role, Sean facilitates the Zero-Gravity Flight Prep and Operating in the Lunar Environment courses at SEI. \n\n Outside of SEI, Sean enjoys skiing in the winter months, and is excited to begin private pilot training."},
      {"img": placeholder, "name": "Sands A. Fish", "role": "Advisor", "title": "Designer at the MIT Space Exploration Initiative", "bio": ""},
    ]

  const nano = [
    {"img": craig, "name": "Craig Carter", "role": "Computational Implementation, Record Design", "title": "POSCO Professor and MacVicar Fellow, DMSE", "bio": "W. Craig Carter is an American materials scientist, a POSCO Professor of Materials Science and Engineering at Massachusetts Institute of Technology. He is also a co-founder of the 24M Technologies Company. \n\n He is a specialist in the fields of meso-scale modelling of materials properties and processing. His research is focused on thermodynamics and kinetics of interfaces, simulations of microstructural evolution, and predictions of fracture and reliability in materials. He has also worked on battery materials. \n\nHe is a MacVicar Fellow and has received the MIT School of Engineering Bose Teaching Award. He has also been a recipient of Wolfram Innovator Award. He is a fellow of American Ceramic Society."},
    {"img": georgios, "name": "Georgios Varnavides", "role": "Message Search Implementation, Website Development", "title": "MIT DMSE Graduate Student", "bio": "Georgios Varnavides is a graduate student in the Department of Materials Science and Engineering at MIT, working on unconventional transport regimes in nanoscale devices. When he’s not drawing funny interaction diagrams, Georgios enjoys camping, generative art, and singing along to musicals on YouTube."},
    {"img": mitnano, "name": "MIT.nano"}
  ]



  

  useEffect(() => {
  }, [popupStatus])

  return (
    <>
      <div className="Team-container">
        <div className="Team-backgroundOverlay">
          <div className="Team-title">
            Our Team
          </div>
          <div className="Team-section">
            {teamLeads.map((person) => 
                <div className="Team-member" onClick={e => {setPopupStatus(true); setPopupPerson(person); }}>
                <img src={person["img"]}/>
                <div className="Team-member-text">
                  <b>{person["name"]}</b>
                  <p>{person["role"]}</p>
                  <p>{person["title"]}</p>
                </div>
              </div>
            )}
          </div>
          <div className="Team-title">
            Space Exploration Initiative (SEI) Team
          </div>
          <div className="Team-section">
            {sei.map((person) => 
                <div className="Team-member" onClick={e => {setPopupStatus(true); setPopupPerson(person); }}>
                <img src={person["img"]}/>
                <div className="Team-member-text">
                  <b>{person["name"]}</b>
                  <p>{person["role"]}</p>
                  <p>{person["title"]}</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="Team-title">
            Design and Manufacturing
          </div>
          <div className="Team-section">
            {nano.map((person) => 
                <div className="Team-member" onClick={e => {setPopupStatus(true); setPopupPerson(person); }}>
                <img src={person["img"]}/>
                <div className="Team-member-text">
                  <b>{person["name"]}</b>
                  <p>{person["role"]}</p>
                  <p>{person["title"]}</p>
                </div>
              </div>
            )}
          </div>
          <div className="Team-title">
            Artistic Collaboration
          </div>
          <div className="Team-section-one">
            {additionalCollabs.map((person) => 
                <div className="Team-member" onClick={e => {setPopupStatus(true); setPopupPerson(person); }}>
                <img src={person["img"]}/>
                <div className="Team-member-text">
                  <b>{person["name"]}</b>
                  <p>{person["role"]}</p>
                  <p>{person["title"]}</p>
                </div>
              </div>
            )}
          </div>
          <div className="Team-title">
            Legal Counsel
          </div>
          <div className="Team-subtitle">
            MIT Office of the General Counsel (OGC)<br></br>
            For legal inquiries, please contact <a target="_blank" href="mailto:mitogc@mit.edu">mitogc@mit.edu</a>.
          </div>
        </div>
        <div>{popupStatus ? <TeamPopup image={popupPerson["img"]} name={popupPerson["name"]} role={popupPerson["role"]} title={popupPerson["title"]} bio={popupPerson["bio"]} closePopup={() => setPopupStatus(false)} /> : null}</div>

      </div>
      <Footer />
    </>
  );
}

export default Team;