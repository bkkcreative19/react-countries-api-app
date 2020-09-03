import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { MyContext } from "./context/context";

ReactDOM.render(
  <MyContext>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </MyContext>,
  document.getElementById("root")
);
