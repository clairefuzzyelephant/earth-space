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
          <p>In an effort to increase global representation in space, MIT sends—for the first time—messages in multiple languages around the world to the International Space Station using nanotechnology. 
          </p>
            <p></p>
            <div className="Mission-boldLarger"><b>Space is for everyone!</b></div>
            <p>
            When the <a target="_blank" href="https://voyager.jpl.nasa.gov/golden-record/">Voyager Golden Record</a> was sent out for any intelligent extraterrestrial life to decipher Earth in 1977, it told a story of the diversity of lives and cultures on our home planet. In a period where technology has advanced to an unprecedented height and humanity needs unity and hope more than ever in face of the COVID-19 crisis, we wish to send a new <i>"Record of Our Voices"</i> to the <a href="https://www.nasa.gov/mission_pages/station/main/index.html" target="_blank">International Space Station (ISS)</a>. This time, the story is not for intelligent extraterrestrial life, <b>but for ourselves.</b></p><p>
            </p>
            <p>
            HUMANS—Humanity United with MIT Art and Nanotechnology in Space—is a project with a goal of promoting international space collaboration and shedding light on how space should remain a "space" for all mankind to unite, instead of isolating from each other. 
            </p>
            <p>
            Join our project by sending us a message in your native language, about the meaning of space to you and to humanity, in addition to an optional audio recording of your voice. We will use nanotechnology to etch the submitted messages to our record, similar to the process used in the <a href="http://onemit.mit.edu/">One.MIT project</a>, before launching it over to the International Space Station!
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