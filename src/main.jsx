import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap
import "./App.css"; // your custom css
import { HashRouter } from "react-router-dom"; // add this import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>   {/* wrap your App in HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
