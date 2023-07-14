import React from "react";
import ReactDOM from "react-dom";
import { WorkoutsContextProvider } from "./context/WorkoutsContext";
import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
