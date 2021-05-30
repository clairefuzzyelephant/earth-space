import React from "react";

import "./TeamPopup.css";

function TeamPopup (props) {
  const { image, name, role, title, bio, closePopup } = props;

  return (
    <>
        <div className="Popup-background">
        </div>
        <div className="TeamPopup-container">
            <div className="TeamPopup-quit" onClick={closePopup}>x</div>

            <img src={image} />
            <h1>{name}</h1>
            <p>{role} | {title}</p>
            <p>{bio}</p>
        </div>
        
        
    </>
  );
}

export default TeamPopup;