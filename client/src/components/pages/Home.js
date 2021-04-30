import React, { useState, useEffect} from "react";
import { Link } from "@reach/router";
import WorldMap from "react-world-map";

import "../../utilities.css";
import "./Home.css";

import { get } from "../../utilities.js";

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
          setTotalSubs(messages.length);
          for (let i = 0; i < messages.length; i++) {
            if (messages[i].region == "NA") {
              setNA(na + 1);
            }
            else if (messages[i].region == "SA") {
              setSA(sa + 1);
            }
            else if (messages[i].region == "AF") {
              setAF(af + 1);
            }
            else if (messages[i].region == "EU") {
              setEU(eu + 1);
            }
            else if (messages[i].region == "AS") {
              setAS(as + 1);
            }
            else if (messages[i].region == "OC") {
              setOC(oc + 1);
            }
          }
        })
    }
    getSubmissions();
}, [totalSubs])


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

          <div className="Home-worldMap">
            <WorldMap selected= {select} onSelect={setSelect} />
          </div>
          <div className="Home-mapCaption">
            Total Submissions: {totalSubs}
            <br></br>
            Click on a region to check out how many people have submitted!
            <br></br>
            {select ? <>{regionMap[select]}: {mapToCount[select]}</> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
