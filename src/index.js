import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./components/App";
import {StrictMode} from 'react';


import "./assets/css/reset.css";
import "./assets/css/index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
