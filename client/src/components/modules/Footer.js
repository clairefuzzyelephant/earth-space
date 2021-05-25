import React from "react";
import "./Footer.css"
import poster from "../../../dist/poster.jpeg";

function Footer(props) {

    return (
        <div className="Footer-container">
        <img className="poster" src={poster} />
        <div className="Footer-overlay"></div>
            <div className="Footer-contact">Questions? Contact us at <a target="_blank" href="mailto:humans_info@mit.edu">humans_info@mit.edu</a>!
            <br></br>Accessibility information: <a target="_blank" href="https://accessibility.mit.edu/">accessibility.mit.edu</a></div>
            <div className="iconDisclaimer">
                <div>Icons made by <a target="_blank" href="https://www.freepik.com" title="Freepik">Freepik</a> from <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </div>
    )
}

export default Footer;