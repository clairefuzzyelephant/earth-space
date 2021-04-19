import React, { useState, useEffect, useMemo } from "react";
import { CountryDropdown } from 'react-country-region-selector';
import MicRecorder from 'mic-recorder-to-mp3';

import LegalPopup from "../modules/LegalPopup.js";

import { post } from "../../utilities.js";

import mic from "../../../dist/mic-icon-white.png";

import "../../utilities.css";
import "./Submit.css";

/**
 * TODO: message character limit, audio input, terms & conditions
 */

function Submit(props) {
    const [legalName, setLegalName] = useState("");
    const [englishName, setEnglishName] = useState("");
    const [emailAddr, setEmailAddr] = useState("");
    const [countryVal, setCountryVal] = useState("");
    const [missEarth, setMissEarth] = useState("");
    const [message, setMessage] = useState("");
    const [translation, setTranslation] = useState("");
    const [language, setLanguage] = useState("");

    const [isChecked, setIsChecked] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [displayWarning, setDisplayWarning] = useState(false);

    const [issues, setIssues] = useState([]);

    const issueList = ["Terms and conditions", "Legal name", "Country", "Message", "Email Address"];
    const issuesOccur = {0: false, 1: false, 2: false, 3: false, 4: false};

    const recorder = useMemo(() => new MicRecorder({ bitRate: 32 }), []);
    const [isRecording, setIsRecording] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const [blobURL, setBlobURL] = useState("");
    const [blob, setBlob] = useState(null);
    const [buffer, setBuffer] = useState(null);

    useEffect(() => {
        async function detectMicAllowed() {
            micAllowed = await navigator.mediaDevices.getUserMedia( {audio: true}) || navigator.getUserMedia({audio: true}) || navigator.webkitGetUserMedia({audio: true}) || navigator.mozGetUserMedia({audio: true}) || navigator.msGetUserMedia({audio: true});
            if (micAllowed) {
                console.log('Permission Granted');
                setIsBlocked(false);
            } 
            else {
                console.log('Permission Denied');
                setIsBlocked(true);
            }
        }
        detectMicAllowed();
    }, [isBlocked])
    

    const handleSubmit = () => {
        console.log(countryVal);
        const body = {legalName: legalName, englishName: englishName, emailAddr: emailAddr, country: countryVal, missEarth: missEarth, message: message, translation: translation, language: language, buffer: buffer};
        if (acceptedTerms && legalName !== "" && countryVal !== "" && message !== "" && emailAddr !== "") {
            post("/api/submitMessage", body).then((result) => {
                if (result !== null) {
                    console.log("Success!");
                    setLegalName("");
                    setEnglishName("");
                    setCountryVal("");
                    setMissEarth("");
                    setMessage("");
                    setEmailAddr("");
                    setTranslation("");
                    setLanguage("");
                    setBuffer(null);
                    setBlob(null);
                    setIsChecked(false);
                }
                else {
                    alert("We encountered an error while trying to submit. Please refresh and try again.")
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
            if (emailAddr == "" || !emailAddr) {
                issuesOccur[4] = true;
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
        setBlob(blob);
        setBuffer(buffer);
        console.log(typeof(buffer))
        console.log(buffer);
        console.log(blob);
        })
    }


    return (
        <>
        <div className="Submit-container">
            <div className="Submit-backgroundOverlay">
            <div className="Submit-title">
                Submit your message!
            </div>
            <div className="Submit-inputSection">
                <div className="Submit-inputInfoLeft">
                    <input className="Submit-smallField" placeholder="Legal Full Name (required)" value={legalName} onChange={e => setLegalName(e.target.value)} />
                    {/* <input className="Submit-smallField" placeholder="Legal Name (if different from above)" value={englishName} onChange={e => setEnglishName(e.target.value)}/> */}
                    <input className="Submit-smallField" placeholder="Email address (required)" value={emailAddr} onChange={e => setEmailAddr(e.target.value)}/>
                    <div className="Submit-countrySection">
                        <CountryDropdown className="Submit-dropdown" showDefaultOption={true} defaultOptionLabel="No Country Selected (required)" value={countryVal} onChange={e => setCountryVal(e)} />
                        <div className="Submit-countryDisclaimer">Country list provided by react-country-region-selector.</div>
                    </div>
                    {/* <div>
                        Note: add region
                    </div> */}
                    {/* <textarea className="Submit-mediumField" placeholder="If you go to space, what would be the thing that you miss most about Earth? (optional)" value={missEarth} onChange={e => setMissEarth(e.target.value)}/> */}
                    <div className="Submit-legalCheckbox">
                        <div><input type="checkbox" checked={isChecked} onChange={() => toggleCheckbox()} /></div>
                        <div>I accept the legal terms and conditions.</div>  
                    </div>
                </div>
                <div className="Submit-inputInfoRight">
                    <textarea className="Submit-largeField" placeholder="Type your message here... (Max 200 characters)" maxLength={200} value={message} onChange={e => setMessage(e.target.value)}/>
                    <textarea className="Submit-mediumField" placeholder="English translation of message (optional)" maxLength={500} value={translation} onChange={e => setTranslation(e.target.value)}/>
                    <input className="Submit-smallField" placeholder="Language of message (required)" value={language} onChange={e => setLanguage(e.target.value)}/>
                    {/** Audio stuff */}
                    <div className="Submit-audioSection">
                        <div className="Submit-recordButton" onClick={() => {
                            if (!isRecording) startRecording()
                            else stopRecording()
                        }}>
                            <img src={mic} />
                        </div>
                        <div className="Submit-audioPrompt">
                            {buffer ? 
                            <>
                            <p>Double-check my recording... or record again?</p>
                            <div>
                                <audio controls autoplay src={blobURL} />
                            </div>
                            </>
                         : isRecording ? <p>Recording...</p> : <p>Record your message (optional)</p>}
                        </div>
                        
                    </div>
                    
                    
                </div>
            </div>
            <div className="Submit-submitButton" onClick={() => handleSubmit()}>
                        Send
                    </div>
                    
                    {displayWarning ? 
                        <div className="Submit-notAcceptedWarning">
                            Please complete the following required fields: 
                            <br/>
                            {issues.slice(0, issues.length - 1).map((issue) =>  
                                <>                     
                                    {issue + ", "}
                                </>
                            )}
                            {issues.length !== 0 ? issues[issues.length - 1]: null}
                        </div> 
                    : null}
            
            </div>

            <div>{showPopup ? <LegalPopup acceptFunction={() => acceptTerms()} cancelFunction={() => cancelTerms()} /> : null}</div>
        </div>
        </>
    );
}

export default Submit;