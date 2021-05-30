import React from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./Mission.css";

import poster from "../../../dist/poster.jpeg";
import Footer from "../modules/Footer.js";
import useScrollToTop from "../ScrollToTop";

function Mission(props) {

  return (
    <>
      <div className="Mission-container">
        <div className="Mission-backgroundOverlay">
          <div className="Mission-title">
            Our Mission
          </div>
          <div className="Mission-introText">
            <div className="Mission-boldLarger"><b>Why are we doing this?</b></div>
            <p>
            When <a href="https://voyager.jpl.nasa.gov/golden-record/" target="_blank">The Golden Record</a> was sent out on Voyager to portray Earth for extraterrestrials in 1977, it told a story of the diversity of lives and cultures on our home planet. Today, after a year of a pandemic that hit all of us around the globe, humanity needs unity more than ever. We wish to send a new <i>"Record of Our Voices"</i> to the <a href="https://www.nasa.gov/mission_pages/station/main/index.html" target="_blank">International Space Station (ISS)</a>. This time, the story is not for extraterrestrials, <b>but for ourselves</b>. 
<br></br><br></br>
<b>HUMANS—Humanity United with MIT Art and Nanotechnology in Space—is a project that aims to increase global representation in space. It creates a symbolic avenue for space access worldwide and emphasizes how space should remain a "space" for all humans to unite, instead of isolating from each other.
</b> 
            </p>
            <div className="Mission-boldLarger"><b>Who are we?</b></div>

            <p>
            Maya and Lihui grew up in different parts of the world (Lebanon and China), yet met at MIT because of our shared passion for space. In our journeys in the space sector, we have both faced constant challenges and struggles that limited us from fully contributing our learning and passion. These challenges generated a shared frustration, but more importantly, a vision that space should be more accessible and representative for more people around the world. We hope this project could be one small symbolic step towards that goal.
            </p>

            <div className="Mission-boldLarger"><b>Why you?</b></div>

            <p>
            This project needs you. We hope to collect messages in your native language, about the meaning of space to you and to humanity, in addition to an optional audio recording of you reading that message. We will use MIT nanotechnology to etch the text and audio waveform to a six-inch record, similar to the process used in the <a href="http://onemit.mit.edu/" target="_blank">One.MIT project</a>. The record would be launched to space and displayed by an astronaut in the International Space Station, accompanied by the background audio of your voices combined. 
            </p>
          </div>
          {/* <img className="poster" src={poster} /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Mission;