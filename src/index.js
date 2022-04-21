import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PrijaveProvider } from "./data/prijaveContext";
import { AdminInfoProvider } from "./data/adminInfoContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AdminInfoProvider>
        <PrijaveProvider>
          <App />
        </PrijaveProvider>
      </AdminInfoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
