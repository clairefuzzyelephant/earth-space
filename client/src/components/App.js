import React from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import Submit from "./pages/Submit.js";

import "../utilities.css";

function App (props) {

  return (
    <>
      <Router>
        <Home
          path="/"
        />
        <Submit 
          path="/submit"
        />
        <NotFound default />
      </Router>
    </>
  );
}

export default App;
