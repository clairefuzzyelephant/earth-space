import React from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import Submit from "./pages/Submit.js";

import NavBar from "./modules/NavBar.js";

import "../utilities.css";

function App (props) {

  return (
    <>
      <NavBar />
      <Router>
        <Home
          path="/"
        />
        <Submit 
          path="/submit"
        />
        <NotFound default />
      </Router>
      <div className="iconDisclaimer">
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    </>
  );
}

export default App;
