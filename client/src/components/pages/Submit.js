import React, { useState, useEffect, useMemo } from "react";
import { CountryDropdown } from 'react-country-region-selector';
import MicRecorder from 'mic-recorder-to-mp3';

import LegalPopup from "../modules/LegalPopup.js";

import { post } from "../../utilities.js";

import "../../utilities.css";
import "./Submit.css";

/**
 * TODO: message character limit, audio input, terms & conditions
 */

function Submit(props) {
    const [legalName, setLegalName] = useState("");
    const [englishName, setEnglishName] = useState("");
    const [countryVal, setCountryVal] = useState("");
    const [message, setMessage] = useState("");

    const [isChecked, setIsChecked] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [displayWarning, setDisplayWarning] = useState(false);

    const [issues, setIssues] = useState([]);

    const issueList = ["- Terms and conditions not accepted", "- Legal name not entered", "- Country not selected", "- Empty message"];
    const issuesOccur = {0: false, 1: false, 2: false, 3: false};

    const recorder = useMemo(() => new MicRecorder({ bitRate: 64 }), []);
    const [isRecording, setIsRecording] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const [blobURL, setBlobURL] = useState("");
    const [buffer, setBuffer] = useState(null);

    useEffect(() => {
        navigator.getUserMedia({ audio: true },
            () => {
              console.log('Permission Granted');
              setIsBlocked(false);
            },
            () => {
              console.log('Permission Denied');
              setIsBlocked(true);
            },
          );
    }, [])
    

    const handleSubmit = () => {
        const body = {legalName: legalName, englishName: englishName, country: countryVal.value, message: message};
        if (acceptedTerms && legalName !== "" && countryVal !== "" && message !== "") {
            post("/api/submitMessage", body).then((result) => {
                if (result !== null) {
                    if (!buffer) {
                        console.log("Success!");
                        setLegalName("");
                        setEnglishName("");
                        setCountryVal("");
                        setMessage("");
                    }
                    else {
                        post("/api/submitRecording", { buffer: buffer }).then((result) => {
                            console.log("Success with recording!");
                            setLegalName("");
                            setEnglishName("");
                            setCountryVal("");
                            setMessage("");
                            setBuffer(null);
                        })
                    }
                    
                }
            })
        }
        else {
            if (!acceptedTerms) {
                issuesOccur[0] = true;
            }
            if (legalName == "" || !legalName) {
                issuesOccur[1] = true;
            }
            if (countryVal == "" || !countryVal) {
                issuesOccur[2] = true;
            }
            if (message == "" || !message) {
                issuesOccur[3] = true;
            }
            setIssues(issueList.filter(function(i) {
                return issuesOccur[issueList.indexOf(i)]
            }))
            setDisplayWarning(true);
            console.log(issues);
        }
            
    }

    const toggleCheckbox = () => {
        console.log("value of state " + isChecked);
        if (!isChecked) {
            console.log("toggling checkbox");
            setShowPopup(true);
        }
        else { //already checked
            setIsChecked(false);
            setAcceptedTerms(false);
        }
    }

    const acceptTerms = () => {
        setAcceptedTerms(true);
        setIsChecked(true);
        setShowPopup(false);
        setDisplayWarning(false);
    }

    const cancelTerms = () => {
        setShowPopup(false);
    }

    const startRecording = () => {
        if (isBlocked) {
            console.log('Permission Denied');
          } else {
            recorder
              .start()
              .then(() => {
                setIsRecording(true);
              }).catch((e) => console.error(e));
          }
    }

    const stopRecording = () => {
        recorder.stop().getMp3()
        .then(([buffer, blob]) => {
        setIsRecording(false);
        const blobURL = URL.createObjectURL(blob)
        setBlobURL(blobURL);
        setBuffer(buffer);
        console.log(buffer);
        console.log(blob);
        })
    }


    return (
        <>
        <div className="Submit-container">
            <div className="Home-backgroundOverlay">
            <div className="Submit-title">
                Submit your message!
            </div>
            <div className="Submit-inputSection">
                <div className="Submit-inputInfoLeft">
                    <input className="Submit-smallField" placeholder="Legal Name" value={legalName} onChange={e => setLegalName(e.target.value)} />
                    <input className="Submit-smallField" placeholder="English Name (if applicable)" value={englishName} onChange={e => setEnglishName(e.target.value)}/>
                    <div>
                        <CountryDropdown className="Submit-dropdown" showDefaultOption={true} defaultOptionLabel="No Country Selected" value={countryVal} onChange={e => setCountryVal(e)} />
                    </div>
                    <div className="Submit-legalCheckbox">
                        <div><input type="checkbox" checked={isChecked} onChange={() => toggleCheckbox()} /></div>
                        <div>I accept the legal terms and conditions.</div>
                    </div>
                </div>
                <div className="Submit-inputInfoRight">
                    <textarea className="Submit-largeField" placeholder="Type your message here... (Max 200 characters)" maxLength={200} value={message} onChange={e => setMessage(e.target.value)}/>
                    
                    {/** Audio stuff */}
                    {/* <button onClick={() => startRecording()} disabled={isRecording}>
                    Record
                    </button>
                    <button onClick={() => stopRecording()} disabled={!isRecording}>
                    Stop
                    </button>
                    <audio src={blobURL} controls="controls" /> */}
                    
                    
                    <div className="Submit-submitButton" onClick={() => handleSubmit()}>
                        Send
                    </div>
                    
                    {displayWarning ? 
                        <div className="Submit-notAcceptedWarning">
                            Please resolve the following issues before continuing: 
                            <br/>
                            {issues.map((issue) =>  
                                <>                     
                                    <p>{issue}</p>
                                </>
                            )}
                        </div> 
                    : null}
                    
                </div>
            </div>
            
            
            </div>

            <div>{showPopup ? <LegalPopup acceptFunction={() => acceptTerms()} cancelFunction={() => cancelTerms()} /> : null}</div>
        </div>
        </>
    );
}

export default Submit;