import React, { useState, useEffect} from "react";
import { Link } from "@reach/router";
import WorldMap from "react-world-map";

import poster from "../../../dist/poster.jpeg";

import "../../utilities.css";
import "./Home.css";

import { get } from "../../utilities.js";

import Footer from "../modules/Footer.js";
import useScrollToTop from "../ScrollToTop";

function Home(props) {

  const [select, setSelect] = useState(null);
  const [totalSubs, setTotalSubs] = useState(0);
  const [na, setNA] = useState(0);
  const [sa, setSA] = useState(0);
  const [af, setAF] = useState(0);
  const [eu, setEU] = useState(0);
  const [as, setAS] = useState(0);
  const [oc, setOC] = useState(0);
  
  const regionMap = {"na": "North America", "sa": "South America", "af": "Africa", "eu": "Europe", "as": "Asia", "oc": "Oceania"};
  const mapToCount = {"na": na, "sa": sa, "af": af, "eu": eu, "as": as, "oc": oc};
  useEffect(() => {
    async function getSubmissions() {
      get("/api/regionCounts").then((regionCounts) => {
        console.log(regionCounts);
        setNA(regionCounts["NA"]);
        setSA(regionCounts["SA"]);
        setAF(regionCounts["AF"]);
        setEU(regionCounts["EU"]);
        setAS(regionCounts["AS"]);
        setOC(regionCounts["OC"]);
        setTotalSubs(regionCounts["NA"] + regionCounts["SA"] + regionCounts["AF"] + regionCounts["EU"] + regionCounts["AS"] + regionCounts["OC"]);
      })
    }
    getSubmissions();
}, [totalSubs, na, sa, af, eu, as, oc])


  return (
    <>
      <div className="Home-container">
        <div className="Home-backgroundOverlay">
          <div className="Home-title">
            <span>H</span>umanity <span>U</span>nited with <span>M</span>IT <span>A</span>rt and <span>N</span>anotechnology in <span>S</span>pace
            <br />
          </div>
          <div className="Home-subtitle">
            A Record of Our Voices
          </div>
          <div className="Home-introText">
          In an effort to increase global representation in space, the HUMANS project creates a symbolic avenue for space access worldwide.
          <br></br><br></br>
          Join our project by sending us a message in your native language, about the meaning of space to you and to humanity, in addition to an optional audio recording of your voice. We will use MIT nanotechnology to etch these messages onto a six-inch record, inspired by <a target="_blank" href="https://voyager.jpl.nasa.gov/golden-record/">The Golden Record</a>, before launching it over to the International Space Station (ISS)!
          <br></br><br></br>
          We invite you to submit your message if you also believe <b>space should be a “space” for everyone!</b>
          </div>
          <div className="Home-buttonContainer">
            <Link to="/submit" className="Home-submitButton">
                Submit
            </Link>
          </div>

          {/* <img className="Home-poster" src={poster} /> */}

          <div className="Home-worldMap">
            <WorldMap selected= {select} onSelect={setSelect} />
          </div>
          <div className="Home-mapCaption">
            Total Submissions: {totalSubs}
            <br></br>
            Click on a region to check out how many people have submitted!
            <br></br>
            <div className="Home-mapSubcaption">{select ? <>{regionMap[select]}: {mapToCount[select]}</> : "(None selected)"}</div>
          </div>
          {/* <img className="poster" src={poster} /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
