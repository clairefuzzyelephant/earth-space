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

function App (props) {

  return (
    <>
      <NavBar />
      <Router>
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
        <NotFound default />
      </Router>
      <Footer />
      
    </>
  );
}

export default App;
