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
          <div className="TeamPopup-quit" onClick={cancelFunction}>x</div>
            <h1>Legal Terms and Conditions</h1>
            <h3>Please accept at the bottom to continue.</h3>
            <div>
          Welcome to the HUMANS: A Record of Our Voices project website (the “Site”). By accessing
this Site, you agree to be bound by the following terms and conditions which MIT may revise at
any time. You are encouraged to visit this page periodically to review current terms and
conditions, as your continued use of this Site signifies your agreement to these terms and
conditions. If you do not understand or do not agree to be bound by these terms and conditions,
please exit this Site immediately.            
<br></br><br></br>
            1. Your use of this Site is entirely voluntary. More information about the Project can be
found here. By accessing this Site, you agree to be bound by the following terms and
conditions. If you do not understand or do not agree to be bound by these terms and
conditions, please exit the Site.
            <br></br><br></br>
            2. You grant to MIT the non-exclusive, irrevocable, worldwide, royalty-free right and license
to reproduce, distribute, publicly perform and/or display, translate, modify, and make
derivative works of the Submission, in any medium, for any educational or non-
commercial purposes, including in connection with the Project.
            <br></br><br></br>
            3. Your Submission for inclusion in the Project is entirely voluntary. MIT is permitted, but
not required, to attribute to you any Submission and to use your name publicly in
connection with such attribution.
            <br></br><br></br>
            4. MIT has the right, but not the responsibility, to review the Submission that you provide to
determine, in its sole discretion, whether to include it as part of the Project. You
understand and agree that by providing a Submission for inclusion in the Project, MIT
makes no commitment to use the Submission. MIT also reserves the right to remove the
Submission from the Project at any time in its sole discretion.
            <br></br><br></br>
            5. You understand and agree that you are entirely responsible for the Submission for
inclusion in the Project. You represent and warrant that you hold all applicable
copyrights and other rights and permissions necessary to permit MIT to use the
Submission in connection with the Project.
            <br></br><br></br>
            6. You agree that your Submission complies with all applicable laws. Without limiting the
generality of the foregoing, you specifically agree that the Submission does not include
malicious, harmful, or illegal content, including without limitation content that:
            <li>defames or threatens others;</li>
            <li>incites violence or other harmful behaviors;</li>
            <li>is harassing towards others;</li>
            <li>invades the privacy of others;</li>
            <li>uses the name or likeness of others without their permission;</li>
            <li>discusses illegal activities with the intent to commit them;</li>
            <li>infringes another’s intellectual property including, but not limited to, copyrights, trademarks, or trade secrets;</li>
            <li>contains obscene (i.e. pornographic) language or images;</li>
            <li>includes advertisements or any form of commercial solicitation or promotion, including links to other sites;</li>
            <li>may constitute partisan political activity;</li>
            <li>is intentionally incomplete, misleading, or inaccurate; or</li>
            <li>is otherwise unlawful.</li>
            <br></br><br></br>
            7. To the extent applicable, you acknowledge that MIT is not the publisher or speaker as to
any Submission submitted by you for purposes of 47 U.S.C. § 230(c)(1).
            <br></br><br></br>
            8. MIT respects your privacy. With the exception of your name and email address, which
MIT requires you to provide when you provide a submission, we do not collect personally
identifiable information about you in connection with the Project. Among other things,
MIT may use your name and email address to communicate with you about the Project
and your Quotation, to attribute your Quotation to you as described above, and for other
related administrative purposes.
            <br></br><br></br>
            9. You agree to defend, hold harmless, and indemnify MIT, and its subsidiaries, affiliates,
officers, agents, and employees from and against any third-party claims, actions, or
demands arising out of, resulting from, or in any way related to your Submission for use
in connection with the Project, including any liability or expense arising from any and all
claims, losses, damages (actual and consequential), suits, judgments, litigation costs
and attorneys’ fees, of every kind and nature. In such a case, MIT will provide you with
written notice of such claim, suit, or action by sending an email to the email address you
provide to MIT when providing your Submission.
            <br></br><br></br>
            10. You agree that any dispute arising out of or relating to these terms and conditions or
your Submission of a Submission will be governed by the laws of the Commonwealth of
Massachusetts, excluding its conflicts of law provisions. You further consent to the
personal jurisdiction of and exclusive venue in the federal and state courts located in and
serving Boston, Massachusetts, as the legal forum for any such dispute.
            <br></br><br></br>
          </div>

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