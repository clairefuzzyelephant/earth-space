import React, { useState, useMemo, useEffect } from "react";
import Select from 'react-select';
import countryList from 'react-select-country-list';

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

    const [checked, setChecked] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const options = useMemo(() => countryList().getData(), []);

    const handleSubmit = () => {
        const body = {legalName: legalName, englishName: englishName, country: countryVal.value, message: message};
        post("/api/submitMessage", body).then((result) => {
            if (result !== null) {
                console.log("Success!");
                setLegalName("");
                setEnglishName("");
                setCountryVal("");
                setMessage("");
            }
        })
    }

    const togglePopup = () => {
        if (!checked) {
            console.log("toggling");
            setShowPopup(true);
            setChecked(true);
        }
        else {
            setShowPopup(false);
            setChecked(false);
        }
    }

    useEffect(() => {
        console.log("toggling popup!!!")
    }, [showPopup])

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
                        <Select className="Submit-dropdown" isSearchable={false} placeholder="No Country Selected" value={countryVal} options={options} onChange={e => setCountryVal(e)} />
                    </div>
                    <div className="Submit-legalCheckbox">
                        <div><input type="checkbox" value={checked} onChange={() => togglePopup()} /></div>
                        <div>I accept the legal terms and conditions.</div>
                    </div>
                </div>
                <div className="Submit-inputInfoRight">
                    <textarea className="Submit-largeField" placeholder="Type your message here..." value={message} onChange={e => setMessage(e.target.value)}/>
                </div>
            </div>
            
            <div className="Submit-introText">
            </div>
            <div className="Submit-submitButton" onClick={() => handleSubmit()}>
                Send
            </div>
            </div>

            <div>{showPopup ? <LegalPopup /> : null}</div>
        </div>
        </>
    );
}

export default Submit;