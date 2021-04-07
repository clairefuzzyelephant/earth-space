import React from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Mission.css";

function Mission(props) {

  return (
    <>
      <div className="Home-container">
        <div className="Home-backgroundOverlay">
          <div className="Mission-title">
            Our Mission
          </div>
          <div className="Mission-introText">
          <p>The MIT Media Lab Space Exploration Initiative is pleased to announce an open call, Golden Record 2.0, to invite people around the world for a unique opportunity to bring their voices to the International Space Station. 
          </p><p>In a year of unending crises, MIT uses nanotechnology to send—for the first time from space— messages of peace, love and unity in languages representing various regions around the world!
        </p>
            <p>
            <b>Space is for everyone!</b>
            </p>
            <p>
            When the Voyager Golden Record was sent out for any intelligent extraterrestrial life to decipher Earth in 1977, it told a story of the diversity of lives and cultures on our home planet. In 2020, a year where technology has advanced to an unprecedented height and human beings need unity and hope more than ever in face of an unprecedented crisis of COVID-19, we wish to send a new different version of the Golden Record to the International Space Station (ISS). This time, the story is not for intelligent extraterrestrial life, but for ourselves. 
            </p><p>
            In this open call, we are collecting names and quotes, in submitters' native languages, under the themes of peace, love and unity, in addition to optional audio or video recordings of the quotes. Later, we will use nanotechnology to etch the submissions on the surface of the Golden Record 2.0, similar to the process used in the One.MIT project. The end goal is to promote international space collaboration and how space should remain a "space" for all mankind to unite, instead of isolating from each other. This project would be in parallel with MIT.nano’s upcoming One.WORLD project.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;