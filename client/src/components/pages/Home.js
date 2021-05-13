import React, { useState, useEffect} from "react";
import { Link } from "@reach/router";
import WorldMap from "react-world-map";

import poster from "../../../dist/poster.jpeg";

import "../../utilities.css";
import "./Home.css";

import { get } from "../../utilities.js";

import Footer from "../modules/Footer.js";

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
        get("/api/allSubmissions").then((messages) => {
          console.log(messages);
          setTotalSubs(messages.length);
          let naCount = 0;
          let saCount = 0;
          let afCount = 0;
          let euCount = 0;
          let asCount = 0;
          let ocCount = 0;
          for (let i = 0; i < messages.length; i++) {
            if (messages[i].region == "NA") {
              naCount = naCount + 1;
            }
            else if (messages[i].region == "SA") {
              saCount = saCount + 1;
            }
            else if (messages[i].region == "AF") {
              afCount = afCount + 1;
            }
            else if (messages[i].region == "EU") {
              euCount = euCount + 1;
            }
            else if (messages[i].region == "AS") {
              asCount = asCount + 1;
            }
            else if (messages[i].region == "OC") {
              ocCount = ocCount + 1;
            }
          }
          setNA(naCount);
          setSA(saCount);
          setAF(afCount);
          setEU(euCount);
          setAS(asCount);
          setOC(ocCount);
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
            In a year of unending crises, MIT sends—for the first time from space—messages of peace and unity in various languages representing all countries around the world using MIT Nanotechnology!
            Space is a "space" for everyone!
            Send your message of peace to space!
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
            {select ? <>{regionMap[select]}: {mapToCount[select]}</> : "(None selected)"}
          </div>
          {/* <img className="poster" src={poster} /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
