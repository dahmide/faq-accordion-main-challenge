import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import App from "./App";

const container = document.querySelector("#root");
createRoot(container).render(
    <StrictMode>
        <App />
    </StrictMode>
);