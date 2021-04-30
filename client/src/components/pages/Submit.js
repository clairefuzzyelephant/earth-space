import React, { useState, useEffect, useMemo } from "react";
import { CountryDropdown } from 'react-country-region-selector';
import { countryData } from '../../data.js';
import Select from 'react-select';
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
    const [emailAddr, setEmailAddr] = useState("");
    const [countryVal, setCountryVal] = useState("");
    const [message, setMessage] = useState("");
    const [translation, setTranslation] = useState("");
    const [language, setLanguage] = useState("");

    const [isChecked, setIsChecked] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [displayWarning, setDisplayWarning] = useState(false);

    const countryOptions = countryData();
    // const options = [ {value: 'EAP', label: 'East Asia and Pacific'}, {value: 'ECA', label: 'Europe and Central Asia'}, {value: 'LAC', label: 'Latin America & Caribbean'}, {value: 'MENA', label: 'Middle East and North Africa'}, {value: 'NAM', label: 'North America'}, {value: 'SAS', label: 'South Asia'}, {value: 'SSA', label: 'Sub-Saharan Africa'}];
    const options = [ {value: 'NA', label: 'North America'}, {value: 'SA', label: 'South America'}, {value: 'AF', label: 'Africa'}, {value: 'EU', label: 'Europe'}, {value: 'AS', label: 'Asia'}, {value: 'OC', label: 'Oceania'} ];

    const [region, setRegion] = useState("");

    const [issues, setIssues] = useState([]);

    const issueList = ["Terms and conditions", "Legal name", "Email Address", "Region", "Message", "Language of Message", "Enter a valid email address"];
    const issuesOccur = {0: false, 1: false, 2: false, 3: false, 4: false};

    const recorder = useMemo(() => new MicRecorder({ bitRate: 64 }), []);
    const [isRecording, setIsRecording] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const [blobURL, setBlobURL] = useState("");
    const [blob, setBlob] = useState(null);
    const [buffer, setBuffer] = useState(null);

    const customStyles = {
        multiValue: (styles) => ({
            ... styles,
            borderRadius: 30,
            color: 'red',
            backgroundColor: 'black',
        }),
    }

    useEffect(() => {
        async function detectMicAllowed() {
            const micAllowed = await navigator.mediaDevices.getUserMedia( {audio: true}) || navigator.getUserMedia({audio: true}) || navigator.webkitGetUserMedia({audio: true}) || navigator.mozGetUserMedia({audio: true}) || navigator.msGetUserMedia({audio: true});
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
        const body = {legalName: legalName, emailAddr: emailAddr, country: countryVal["value"], region: region["value"], message: message, translation: translation, language: language, buffer: buffer};
        if (acceptedTerms && legalName !== "" && region !== "" && message !== "" && emailAddr !== "" && emailAddr.indexOf('@') !== -1 && language !== "") {
            post("/api/submitMessage", body).then((result) => {
                if (result !== null) {
                    console.log("Success!");
                    setLegalName("");
                    setCountryVal("");
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
            if (emailAddr == "" || !emailAddr) {
                issuesOccur[2] = true;
            }
            if (region == "" || !region) {
                issuesOccur[3] = true;
            }
            if (message == "" || !message) {
                issuesOccur[4] = true;
            }
            if (language == "" || !language) {
                issuesOccur[5] = true;
            }
            if (emailAddr !== "" && emailAddr.indexOf("@") == -1) {
                issuesOccur[6] = true;
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

    // const record = async () => {
    //     if (isRecording) {
    //         const tempBlob = await recorder.stopRecording();
    //         setBlob(tempBlob);
    //         setIsRecording(false);
    //         setBlobURL(URL.createObjectURL(tempBlob))
    //     }
    //     else {
    //         await recorder.initAudio();
    //         await recorder.initWorker();
    //         recorder.startRecording();
    //         setIsRecording(true);
    //     }
    // }

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
                Send your message of peace to space!
            </div>
            <div className="Submit-inputSection">
                <div className="Submit-inputInfoLeft">
                    <input className="Submit-smallField" placeholder="Legal Full Name (required)" value={legalName} onChange={e => setLegalName(e.target.value)} />
                    {/* <input className="Submit-smallField" placeholder="Legal Name (if different from above)" value={englishName} onChange={e => setEnglishName(e.target.value)}/> */}
                    <input className="Submit-smallField" placeholder="Email address (required)" value={emailAddr} onChange={e => setEmailAddr(e.target.value)}/>
                    <div className="Submit-countrySection">
                        {/* <CountryDropdown className="Submit-dropdown" showDefaultOption={true} defaultOptionLabel="No Country Selected (required)" value={countryVal} onChange={e => setCountryVal(e)} /> */}
                        <Select options={countryOptions} value={countryVal} className="Submit-dropdown" isSearchable={false} placeholder="Select your country" onChange={e => setCountryVal(e)} />
                        <div className="Submit-countryDisclaimer">Country list provided by country-region-data repo.</div>
                    </div>
                    <div className="Submit-countrySection">
                        <Select options={options} className="Submit-dropdown" isSearchable={false} value={region} placeholder="Select your region" onChange={e => setRegion(e)} />
                        {/* <div className="Submit-countryDisclaimer">Region list as classified by the World Bank.</div> */}
                    </div>
                    
                </div>
                <div className="Submit-inputInfoRight">
                    <div className="Submit-messagingText">
                        What does peace and unity mean to me in my own language?
                    </div>
                    <textarea className="Submit-largeField" placeholder="Type your message here... (Max 200 characters)" maxLength={200} value={message} onChange={e => setMessage(e.target.value)}/>
                    <input className="Submit-smallField" placeholder="Language of message (required)" value={language} onChange={e => setLanguage(e.target.value)}/>
                    <textarea className="Submit-mediumField" placeholder="English translation of message (optional)" maxLength={500} value={translation} onChange={e => setTranslation(e.target.value)}/>
                    {/** Audio stuff */}
                    <div className="Submit-audioSection">
                        <div className="Submit-recordButton" onClick={() => {
                            if (isRecording) stopRecording()
                            else startRecording()
                        }}>
                            <img src={mic} />
                        </div>
                        <div className="Submit-audioPrompt">
                            {buffer && !isRecording ? 
                            <>
                            <p>Double-check my recording... or press to record again?</p>
                            <div>
                                <audio controls autoplay src={blobURL} />
                            </div>
                            </>
                         : isRecording ? <p>Recording...</p> : <p>Record your message (optional)</p>}
                        </div>
                        
                    </div>
                    <div className="Submit-legalCheckbox">
                        <div><input type="checkbox" checked={isChecked} onChange={() => toggleCheckbox()} /></div>
                        <div>I accept the legal terms and conditions.</div>  
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