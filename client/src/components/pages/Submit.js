import React, { useState, useEffect, useMemo } from "react";
import { countryData } from '../../data.js';
import Select from 'react-select';
import MicRecorder from 'mic-recorder-to-mp3';

import LegalPopup from "../modules/LegalPopup.js";

import { post } from "../../utilities.js";
// import { Mp3Encoder } from 'lamejs';

import RecordRTC, { StereoAudioRecorder } from 'recordrtc';

import mic from "../../../dist/mic-icon-white.png";

import "../../utilities.css";
import "./Submit.css";
import Footer from "../modules/Footer.js";

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

    // const recorder = useMemo(() => new MicRecorder({ bitRate: 64 }), []);
    const [audioStream, setAudioStream] = useState(null);
    const [recorder, setRecorder] = useState(null);
    const [microphone, setMicrophone] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const [blobURL, setBlobURL] = useState("");
    const [blob, setBlob] = useState(null);
    const [buffer, setBuffer] = useState(null);

    const [chunks, setChunks] = useState([]);

    const [file, setFile] = useState("");

    const targetHeight = 40;
    const customStyles = {
        // control: base => ({
        //     ...base,
        //     minHeight: targetHeight,
        //     height: targetHeight,
        //   }),
        //   valueContainer: base => ({
        //     ...base,
        //     height: `${targetHeight - 1 - 1}px`,
        //     padding: '2px 10px',
        //     color: '#575757',
        //   }),
        //   singleValue: base => ({
        //       ...base,
        //       marginTop: 120,
        //   })
      };


    // function supportsRecording(mimeType)
    //     {
    //         if (!window.MediaRecorder)
    //             return false;
    //         if (!MediaRecorder.isTypeSupported)
    //             return mimeType.startsWith("audio/mp4") || mimeType.startsWith("video/mp4");
    //         return MediaRecorder.isTypeSupported(mimeType);
    //     }


    // function getAudioStream() {
    //     // Older browsers might not implement mediaDevices at all, so we set an empty object first
    //     if (navigator.mediaDevices === undefined) {
    //       navigator.mediaDevices = {};
    //     }
    
    //     if (navigator.mediaDevices.getUserMedia === undefined) {
    //       navigator.mediaDevices.getUserMedia = function (constraints) {
    //         // First get ahold of the legacy getUserMedia, if present
    //         const params = { audio: true, video: false };
    //         let getUserMedia = navigator.mediaDevices.getUserMedia( params) || navigator.getUserMedia(params) || navigator.webkitGetUserMedia(params) || navigator.mozGetUserMedia(params) || navigator.msGetUserMedia(params);

    //         if (!getUserMedia) {
    //             setIsBlocked(true);
    //           return Promise.reject(
    //             new Error("getUserMedia is not implemented in this browser")
    //           );
    //         }
    
    //         // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
    //         return new Promise(function (resolve, reject) {
    //           getUserMedia.call(navigator, constraints, resolve, reject);
    //         });
    //       };
    //     }
    
        
    //     setIsBlocked(false);
    //     return navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    //   }

    //   useEffect(() => {
    //     (async () => {
    //         if (recorder == null) {
    //             // const as = await getAudioStream();
    //             // setAudioStream(as);
    //             // setRecorder(new MediaRecorder(as, {mimeType: 'audio/webm'}));
    //             // let params = {audio: true};
    //             // let getUserMedia = navigator.mediaDevices.getUserMedia( params) || navigator.getUserMedia(params) || navigator.webkitGetUserMedia(params) || navigator.mozGetUserMedia(params) || navigator.msGetUserMedia(params);
    //             // navigator.mediaDevices.getUserMedia({
    //             //     video: false,
    //             //     audio: true
    //             // }).then(async function(stream) {
    //             //     let recorder = RecordRTC(stream, {
    //             //         type: 'audio'
    //             //     });
    //             //     recorder.startRecording();
                
    //             //     const sleep = m => new Promise(r => setTimeout(r, m));
    //             //     await sleep(3000);
                
    //             //     recorder.stopRecording(function() {
    //             //         let blob = recorder.getBlob();
    //             //     });
    //             // });
    //         }
    //         // if (isRecording && recorder !== null) {
    //         //     recorder.start();
    //         //     recorder.ondataavailable = async (event) => {
                    
    //         //         const blobURL = URL.createObjectURL(event.data);
    //         //         let blob = new Blob([event.data], {
    //         //             type: 'audio/webm'
    //         //         });

    //         //         setBlobURL(blobURL);

    //         //         // let tempBlob = new Blob(event.data);
    //         //         // console.log(tempBlob.arrayBuffer())
    //         //         console.log(blob);
    //         //         // setBuffer(blob);

    //         //         // Set up file reader on loaded end event
    //         //         const fileReader = new FileReader();

    //         //         const ac = window.AudioContext || window.webkitAudioContext;
    //         //         const audioContext = new ac();
    //         //         // const audioContext = new AudioContext();
    //         //         // const lameEncoder = new Encoder({
    //         //         //     // 128 or 160 kbit/s – mid-range bitrate quality
    //         //         //     bitRate: 128,
    //         //         //     startRecordingAt: 300,
    //         //         //     deviceId: null,
    //         //         //   });

    //         //         fileReader.onloadend = () => {

    //         //             const arrayBuffer = fileReader.result;
    //         //             var binary = '';
    //         //             var bytes = new Int8Array( arrayBuffer );

    //         //             const channels = 1; //1 for mono or 2 for stereo
    //         //             // setBuffer(Array.from(bytes));
    //         //             console.log(Array.from(bytes));
                        
    //         //             // Convert array buffer into audio buffer
    //         //             audioContext.decodeAudioData(arrayBuffer, (audioBuffer) => {
                            
    //         //                 setBuffer(audioBuffer);
    //         //                 console.log(audioBuffer);

    //         //             })

    //         //         }
    //         //         fileReader.readAsArrayBuffer(event.data);
    //         //     }
    //         // }
    //         // if (recorder !== null && !isRecording && recorder.state == "recording") {
    //         //     recorder.stop();
    //         // }
    //     }
    //     )();
    //   }, [isRecording]);

    const handleSubmit = () => {
        const body = {legalName: legalName, emailAddr: emailAddr, country: countryVal["value"], region: region["value"], message: message, translation: translation, language: language, linkToRecording: ""};

        if (acceptedTerms && legalName !== "" && region !== "" && message !== "" && emailAddr !== "" && emailAddr.indexOf('@') !== -1 && language !== "") {
            if (blob) {
                submitAudioFile().then((result) => {
                    if (result !== null) {
                        body.linkToRecording = result.link;
                        post("/api/submitMessage", body).then((result) => {
                            if (result !== null) {
                                console.log("Success!");
                                setLegalName("");
                                setCountryVal("");
                                setRegion("");
                                setMessage("");
                                setEmailAddr("");
                                setTranslation("");
                                setLanguage("");
                                setBuffer(null);
                                setBlob(null);
                                setBlobURL("");
                                setIsChecked(false);
                            }
                            else {
                                alert("We encountered an error while trying to submit. Please refresh and try again.")
                            }
                        })
                    }
                });
            }
            else {
                post("/api/submitMessage", body).then((result) => {
                    if (result !== null) {
                        console.log("Success!");
                        setLegalName("");
                        setCountryVal("");
                        setRegion("");
                        setMessage("");
                        setEmailAddr("");
                        setTranslation("");
                        setLanguage("");
                        setBuffer(null);
                        setBlob(null);
                        setBlobURL("");
                        setIsChecked(false);
                    }
                    else {
                        alert("We encountered an error while trying to submit. Please refresh and try again.")
                    }
                })
            }
        } else {
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
        
        // const body = {legalName: legalName, emailAddr: emailAddr, country: countryVal["value"], region: region["value"], message: message, translation: translation, language: language};
        // if (acceptedTerms && legalName !== "" && region !== "" && message !== "" && emailAddr !== "" && emailAddr.indexOf('@') !== -1 && language !== "") {
        //     post("/api/submitMessage", body).then((result) => {
        //         if (result !== null) {
        //             console.log("Success!");
        //             setLegalName("");
        //             setCountryVal("");
        //             setRegion("");
        //             setMessage("");
        //             setEmailAddr("");
        //             setTranslation("");
        //             setLanguage("");
        //             setBuffer(null);
        //             setBlob(null);
        //             setBlobURL("");
        //             setIsChecked(false);
        //         }
        //         else {
        //             alert("We encountered an error while trying to submit. Please refresh and try again.")
        //         }
        //     })
        // }
        // else {
        //     if (!acceptedTerms) {
        //         issuesOccur[0] = true;
        //     }
        //     if (legalName == "" || !legalName) {
        //         issuesOccur[1] = true;
        //     }
        //     if (emailAddr == "" || !emailAddr) {
        //         issuesOccur[2] = true;
        //     }
        //     if (region == "" || !region) {
        //         issuesOccur[3] = true;
        //     }
        //     if (message == "" || !message) {
        //         issuesOccur[4] = true;
        //     }
        //     if (language == "" || !language) {
        //         issuesOccur[5] = true;
        //     }
        //     if (emailAddr !== "" && emailAddr.indexOf("@") == -1) {
        //         issuesOccur[6] = true;
        //     }
        //     setIssues(issueList.filter(function(i) {
        //         return issuesOccur[issueList.indexOf(i)]
        //     }))
        //     setDisplayWarning(true);
        //     console.log(issues);
        // }
            
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

    // const startRecording = () => {
    //     if (isBlocked) {
    //         console.log('Permission Denied');
    //       } else {
    //         // recorder.start();
    //         setIsRecording(true);
    //         // recorder
    //         //   .start()
    //         //   .then(() => {
    //         //     setIsRecording(true);
    //         //   }).catch((e) => console.error(e));
    //       }
    // }


    // const stopRecording = () => {
    //     // recorder.stop();
    //     // console.log(recorder.state)
    //     setIsRecording(false);
    //     // console.log(chunks);
    //     // let tempBlob = new Blob(chunks, {'type': 'audio/ogg;codecs=opus'});
    //     // setBlob(tempBlob);
    //     // console.log(tempBlob);
    //     // const blobURL = window.URL.createObjectURL(tempBlob);
    //     // console.log(blobURL);
    //     // setBlobURL(blobURL);
    //     // setChunks([]);
        
    //     // recorder.stop().getMp3()
    //     // .then(([buffer, blob]) => {
    //     // setIsRecording(false);
    //     // const blobURL = URL.createObjectURL(new Blob(chunks));
    //     // console.log(chunks);
    //     // // const blobURL = URL.createObjectURL(blob);
    //     // setBlobURL(blobURL);
    //     // setBlob(blob);
    //     // setBuffer(buffer);
    //     // console.log(typeof(buffer))
    //     // console.log(buffer);
    //     // console.log(blob);
    //     // })
    // }

    function captureMicrophone(callback) {
    
        if(microphone) {
            callback(microphone);
            return;
        }
    
        if(typeof navigator.mediaDevices === 'undefined' || !navigator.mediaDevices.getUserMedia) {
            alert('This browser does not supports WebRTC getUserMedia API.');
    
            if(!!navigator.getUserMedia) {
                alert('This browser seems supporting deprecated getUserMedia API.');
            }
        }
    
        navigator.mediaDevices.getUserMedia({
            audio: isEdge ? true : {
                echoCancellation: false
            }
        }).then(function(mic) {
            callback(mic);
        }).catch(function(error) {
            alert('Unable to capture your microphone. Please check console logs.');
            console.error(error);
        });
    }

    function replaceAudio(src) {
        setBlobURL(src);
        // var newAudio = document.createElement('audio');
        // newAudio.controls = true;
        // newAudio.autoplay = true;
    
        // if(src) {
        //     newAudio.src = src;
        // }
        
        // var parentNode = audio.parentNode;
        // parentNode.innerHTML = '';
        // parentNode.appendChild(newAudio);
    
        // audio = newAudio;
    }

    function stopRecordingCallback() {
        const tempBlob = recorder.getBlob();
        replaceAudio(URL.createObjectURL(tempBlob));
        setBlob(tempBlob);

        console.log(tempBlob);
        
        // setTimeout(function() {
        //     if(!audio.paused) return;
    
        //     setTimeout(function() {
        //         if(!audio.paused) return;
        //         audio.play();
        //     }, 1000);
            
        //     audio.play();
        // }, 300);
    
        // audio.play();
    
    
        // if(isSafari) {
        //     click(btnReleaseMicrophone);
        // }
    }

    const isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);


    const startRecordingRTC = () => {
    
        if (!microphone) {
            captureMicrophone(function(mic) {
                setMicrophone(mic);
    
                // if(isSafari) {
    
                    alert('Please click startRecording button again. First time we tried to access your microphone. Now we will record it.');
                //     return;
                // }
    
                // click(btnStartRecording);
            });
            return;
        }
    
        // replaceAudio();
    
        // audio.muted = true;
        // audio.srcObject = microphone;
    
        let options = {
            type: 'audio/wav',
            numberOfAudioChannels: 1,
            // checkForInactiveTracks: true,
            bufferSize: 256
        };
    
        if(isSafari || isEdge) {
            options.recorderType = StereoAudioRecorder;
        }
    
        if(isSafari) {
            console.log("IT IS SAFARI????")
            options.sampleRate = 44100;
            options.bufferSize = 256;
            options.numberOfAudioChannels = 1;
        }
    
        if(recorder !== null) {
            setRecorder(null);
        }
    
        let tempRecorder = RecordRTC(microphone, options);
        console.log(tempRecorder);
        setRecorder(tempRecorder);
        tempRecorder.startRecording();
        setIsRecording(true);
        console.log("recording");
    };
    
    const stopRecordingRTC = () => {
        if (recorder !== null) {
            recorder.stopRecording(stopRecordingCallback);
            console.log("stopping");
            setIsRecording(false);
        }
    };

    const submitAudioFile = async () => {
        if (blob) {
            console.log(blob)
            let formdata = new FormData() ; //create a from to of data to upload to the server
            formdata.append("soundBlob", blob,  'myfiletosave.wav') ; // append the sound blob and the name of the file. third argument will show up on the server as req.file.originalname
            console.log(formdata);
            fetch("/api/uploadAudio", {
                headers: { Accept: "application/json"},
                method: "POST", 
                body: formdata
            }).then((result) =>  {
                if (result !== null) {
                    return true;
                }
            });
        }
        return false;
    }

    
    return (
        <>
        <div className="Submit-container">
            <div className="Submit-backgroundOverlay">
            <div className="Submit-title">
                Send your message of peace to space!
            </div>
            <div className="Submit-introText">
            In a year of unending crises, MIT sends—for the first time from space—messages of peace and unity in various languages representing all countries around the world using MIT Nanotechnology!
            Space is a "space" for everyone!
            Send your message of peace to space!
            </div>
            <div className="Submit-inputSection">
                <div className="Submit-inputInfoLeft">
                    <input className="Submit-smallField" placeholder="Legal Full Name (required)" value={legalName} onChange={e => setLegalName(e.target.value)} />
                    {/* <input className="Submit-smallField" placeholder="Legal Name (if different from above)" value={englishName} onChange={e => setEnglishName(e.target.value)}/> */}
                    <input className="Submit-smallField" placeholder="Email address (required)" value={emailAddr} onChange={e => setEmailAddr(e.target.value)}/>
                    <div className="Submit-countrySection">
                        {/* <CountryDropdown className="Submit-dropdown" showDefaultOption={true} defaultOptionLabel="No Country Selected (required)" value={countryVal} onChange={e => setCountryVal(e)} /> */}
                        <Select styles={customStyles} options={countryOptions} value={countryVal} className="Submit-dropdown" isSearchable={false} placeholder="Select your country" onChange={e => setCountryVal(e)} />
                        <div className="Submit-countryDisclaimer">Country list provided by country-region-data repo.</div>
                    </div>
                    <div className="Submit-countrySection">
                        <Select styles={customStyles} options={options} className="Submit-dropdown" isSearchable={false} value={region} placeholder="Select your region" onChange={e => setRegion(e)} />
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
                            if (isRecording) stopRecordingRTC()
                            else startRecordingRTC()
                        }}>
                            <img src={mic} />
                        </div>
                        <div className="Submit-audioPrompt">
                            {blobURL && !isRecording ? 
                            <>
                            <p>Double-check my recording... or press to record again?</p>
                            <div>
                                <audio controls autoPlay src={blobURL} />
                            </div>
                            </>
                         : isRecording ? <p>Recording...</p> : <p>Record your message (optional)</p>}
                        </div>  
                    </div>
                    {/* <div className="Submit-audioPrompt">
                            <input type="file" onChange={e => setFile(e.target.files[0])}/>
                        </div> */}
                    <div className="Submit-legalCheckbox">
                        <div><input type="checkbox" style={{ minHeight: "20px", minWidth: "20px"}} checked={isChecked} onChange={() => toggleCheckbox()} /></div>
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
{/* 
        <button className="startRecording" onClick={() => startRecordingRTC()}>start recording</button>
        <button className="stopRecording" onClick={() => stopRecordingRTC()}>stop recording</button>
        <audio controls src={blobURL} /> */}
        <Footer />
        </>
    );
}

export default Submit;