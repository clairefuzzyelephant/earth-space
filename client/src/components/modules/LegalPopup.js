import React from "react";

import "./LegalPopup.css";

function Popup (props) {
  console.log("HEYY")
  const { acceptFunction, cancelFunction } = props;

  return (
    <>
        <div className="Popup-background">
        </div>
        <div className="Popup-container">
            <h1>Legal Terms and Conditions</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit. Mauris a diam maecenas sed enim ut sem viverra. Ultricies leo integer malesuada nunc. Lectus nulla at volutpat diam ut venenatis tellus. Massa enim nec dui nunc mattis. Cras adipiscing enim eu turpis. Massa tincidunt nunc pulvinar sapien. Amet nisl purus in mollis nunc. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Ut tristique et egestas quis ipsum. Facilisis leo vel fringilla est ullamcorper. Bibendum enim facilisis gravida neque convallis a cras semper.

            In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Quam vulputate dignissim suspendisse in est ante in nibh. Ultrices dui sapien eget mi proin sed. Euismod lacinia at quis risus sed vulputate. Velit ut tortor pretium viverra suspendisse potenti. At augue eget arcu dictum. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. Massa vitae tortor condimentum lacinia quis vel eros. Sed augue lacus viverra vitae congue eu. Viverra accumsan in nisl nisi. Massa id neque aliquam vestibulum. Lacus luctus accumsan tortor posuere ac ut consequat. Cras sed felis eget velit aliquet. Pellentesque massa placerat duis ultricies. Tortor posuere ac ut consequat semper viverra nam. 



            <div className="Popup-buttonGroup">
                <div className="Popup-cancelButton" onClick={cancelFunction}>
                    Cancel
                </div>
                <div className="Popup-acceptButton" onClick={acceptFunction}>
                    Accept
                </div>
            </div>
        </div>
        
    </>
  );
}

export default Popup;