import React, { useState, useMemo } from "react";
import Select from 'react-select';
import countryList from 'react-select-country-list';

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
                </div>
                <div className="Submit-inputInfoRight">
                    <input className="Submit-smallField" placeholder="Type your message here..." value={message} onChange={e => setMessage(e.target.value)}/>
                </div>
            </div>
            
            <div className="Submit-introText">
            </div>
            <div className="Submit-submitButton" onClick={() => handleSubmit()}>
                Send
            </div>
            </div>
        </div>
        </>
    );
}

export default Submit;