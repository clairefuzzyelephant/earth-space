import React from "react";
import "./Footer.css"

function Footer(props) {

    return (
        <div className="Footer-container">
        <div className="Footer-overlay"></div>
            <div className="Footer-contact">Questions? Contact us at insertEmailHere@mit.edu!</div>
            <div className="iconDisclaimer">
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </div>
    )
}

export default Footer;