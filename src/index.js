import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { PrijaveProvider } from "./data/applicationsContext";
import { AdminInfoProvider } from "./data/adminInfoContext";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <AdminInfoProvider>
        <PrijaveProvider>
          <App />
        </PrijaveProvider>
      </AdminInfoProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
