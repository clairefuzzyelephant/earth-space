import React from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import Submit from "./pages/Submit.js";

import NavBar from "./modules/NavBar.js";
import Footer from "./modules/Footer.js";

import "../utilities.css";
import Mission from "./pages/Mission.js";
import Team from "./pages/Team.js";
import TermsConditions from "./pages/TermsConditions.js";

import ScrollToTop from "./ScrollToTop.js";
import useScrollToTop from "./ScrollToTop.js";

function App (props) {

  return (
    <>
      <NavBar />
      <Router primary={false}>
        <ScrollToTop path="/" >
          <Home
            path="/"
          />
          <Mission
            path="/mission"
          />
          <Team 
            path="/team"
          />
          <Submit 
            path="/submit"
          />
          <TermsConditions 
            path="/terms"
          />
          <NotFound default />
        </ScrollToTop>
      </Router>
      {/* <Footer /> */}
      
    </>
  );
}

export default App;
