import React from "react";
import { Link } from "@reach/router";

import "../../utilities.css";
import "./TermsConditions.css";
import AltFooter from "../modules/AltFooter.js";

function TermsConditions(props) {

  return (
    <>
      <div className="Terms-container">
        <div className="Terms-backgroundOverlay">
          <div className="Terms-title">
            Legal Terms and Conditions
          </div>
          <div className="Terms-body">
            Welcome to the HUMANS: A Record of Our Voices project website (the “Site”). By accessing this Site, you agree to be bound by the following terms and conditions which MIT may revise at any time. You are encouraged to visit this page periodically to review current terms and conditions, as your continued use of this Site signifies your agreement to these terms and conditions. If you do not understand or do not agree to be bound by these terms and conditions, please exit this Site immediately.
            <br></br><br></br>
            Your use of this Site is entirely voluntary. More information about the Project can be found <a href="https://mithumans.herokuapp.com/mission" target="_blank">here</a>.  By accessing this Site, you agree to be bound by the following terms and conditions. If you do not understand or do not agree to be bound by these terms and conditions, please exit the Site.
            <br></br><br></br>
            You grant to MIT the non-exclusive, irrevocable, worldwide, royalty-free right and license to reproduce, distribute, publicly perform and/or display, translate, modify, and make derivative works of the Submission, in any medium, for any educational or non-commercial purposes, including in connection with the Project.
            <br></br><br></br>
            Your Submission for inclusion in the Project is entirely voluntary.  MIT is permitted, but not required, to attribute to you any Submission and to use your name publicly in connection with such attribution.
            <br></br><br></br>
            MIT has the right, but not the responsibility, to review the Submission that you provide to determine, in its sole discretion, whether to include it as part of the Project.  You understand and agree that by providing a Submission for inclusion in the Project, MIT makes no commitment to use the Submission.  MIT also reserves the right to remove the Submission  from the Project at any time in its sole discretion.
            <br></br><br></br>
            You understand and agree that you are entirely responsible for the Submission for inclusion in the Project.  You represent and warrant that you hold all applicable copyrights and other rights and permissions necessary to permit MIT to use the Submission in connection with the Project.
            <br></br><br></br>
            You agree that your Submission complies with all applicable laws.  Without limiting the generality of the foregoing, you specifically agree that the Submission does not include malicious, harmful, or illegal content, including without limitation content that:
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
            To the extent applicable, you acknowledge that MIT is not the publisher or speaker as to any Submission submitted by you for purposes of 47 U.S.C. § 230(c)(1).
            <br></br><br></br>
            MIT respects your privacy.  With the exception of your name and email address, which MIT requires you to provide when you provide a submission, we do not collect personally identifiable information about you in connection with the Project.  Among other things, MIT may use your name and email address to communicate with you about the Project and your Quotation, to attribute your Quotation to you as described above, and for other related administrative purposes.
            <br></br><br></br>
            You agree to defend, hold harmless, and indemnify MIT, and its subsidiaries, affiliates, officers, agents, and employees from and against any third-party claims, actions, or demands arising out of, resulting from, or in any way related to your Submission for use in connection with the Project, including any liability or expense arising from any and all claims, losses, damages (actual and consequential), suits, judgments, litigation costs and attorneys’ fees, of every kind and nature.  In such a case, MIT will provide you with written notice of such claim, suit, or action by sending an email to the email address you provide to MIT when providing your Submission.
            <br></br><br></br>
            You agree that any dispute arising out of or relating to these terms and conditions or your Submission of a Submission will be governed by the laws of the Commonwealth of Massachusetts, excluding its conflicts of law provisions.  You further consent to the personal jurisdiction of and exclusive venue in the federal and state courts located in and serving Boston, Massachusetts, as the legal forum for any such dispute.          
            <br></br><br></br>
          </div>
          <div className="Terms-title">
            Privacy Statement
          </div>
          <div className="Terms-body">
          <div className="Terms-header">Introduction</div>
          <div className="Terms-header">The Humans: A Recording of Our Voices Project (the “Project”) is committed to supporting the privacy of those who seek to participate in the Project.  This Privacy Statement explains how we handle and use the personal information we collect as part of the submission process.  
          </div>
          <div className="Terms-header">What personal information we collect </div>
          <li>While specific information may vary for particular individuals, we may collect, use, store and transfer different kinds of personal information about you, which we have grouped together as follows: 
          </li><li>Basic biographic/contact information – name, email addresses, and social media contact information
          </li><li>Personal audio recordings 
          </li><li>Analytical information – aggregated information related to web visitor activity and email marketing actions
          </li>
          <p>
          <div className="Terms-header">How we collect personal information about you </div>
          </p><p>The only personal information we collect is that which you provide voluntarily for inclusion in the Project.  
          </p>
          <div className="Terms-header">How we use your personal information</div>
          <p>We use your personal information for a number of legitimate purposes all in support of the Institute and its mission.  Here, we use your personal information for purposes of the Project only.  
          </p>
          <p>If you have concerns about any of these purposes, or how we communicate with you, please contact us at INSERT DLC CONTACT NAME. We will always respect a request by you to stop processing your personal information (subject to our legal obligations).
          </p>
          <div className="Terms-header">When we share your personal information</div>
          <p>We do not share your personal information with any third parties.  
          </p>
          <div className="Terms-header">How your information is stored and secured</div>
          <p>MIT uses risk-assessed administrative, technical and physical security measures to protect your personal information.  [INCLUDE DETAILS ABOUT HOW INFORMATION IS STORED AND SECURED]. 
          </p>
          
          <div className="Terms-header">How long we keep your personal information</div>
          <p>[DETERMINE WHAT YOUR RETENTION PERIOD IS. IF YOU DO NOT HAVE A CURRENT RETENTION PERIOD, CONSIDER RETAINING IN ACCORDANCE WITH APPLICABLE LAW, MIT POLICY, OR UNTIL YOU HAVE BEEN ASKED TO DELETE.]
          </p>

          <div className="Terms-header">Rights for Individuals in the European Economic Area</div>
          <p>You have the right in certain circumstances to (1) access your personal information; (2) to correct or erase information; (3) restrict processing; and (4) object to communications, direct marketing, or profiling.  To the extent applicable, the EU’s General Data Protection Regulation provides further information about your rights.  You also have the right to lodge complaints with your national or regional data protection authority.  
          </p><p>
          If you are inclined to exercise these rights, we request an opportunity to discuss with you any concerns you may have. To protect the personal information we hold, we may also request further information to verify your identity when exercising these rights.  Upon a request to erase information, we will maintain a core set of personal data to ensure we do not contact you inadvertently in the future, as well as any information necessary for MIT archival purposes.  We may also need to retain some financial information for legal purposes, including US IRS compliance.  In the event of an actual or threatened legal claim, we may retain your information for purposes of establishing, defending against or exercising our rights with respect to such claim.
          </p><p>
          By providing information directly to MIT, you consent to the transfer of your personal information outside of the European Economic Area to the United States.  You understand that the current laws and regulations of the United States may not provide the same level of protection as the data and privacy laws and regulations of the EEA.  
          </p><p>
          You are under no statutory or contractual obligation to provide any personal data to us.
          </p>

          <div className="Terms-header">Additional Information</div>
          <p>We may change this Privacy Statement from time to time.  If we make any significant changes in the way we treat your personal information we will make this clear on our MIT websites or by contacting you directly. 
          </p>
          
          <br></br><p>This policy was last updated in April 2021.</p>

          </div>
        </div>
      </div>
      <AltFooter />
    </>
  );
}

export default TermsConditions;