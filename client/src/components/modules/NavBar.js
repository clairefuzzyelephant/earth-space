import React from "react";
import { Link } from "@reach/router";
import "./NavBar.css"

import earth from "../../../dist/earth-white-icon.png";
import satellite from "../../../dist/satellite_icon_white.png";
import terms from "../../../dist/terms-white-icon.png";

function NavBar(props) {

    return (
        <div className="NavBar-container">
            <Link to="/" className="NavBar-link">
                <img src={earth} /> Mission
            </Link>
            <Link to="/submit" className="NavBar-link">
                <img src={satellite} /> Submit
            </Link>
            <div className="NavBar-link">
                <img src={terms} /> Terms
            </div>
        </div>
    )
}

export default NavBar;