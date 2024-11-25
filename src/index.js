import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import ContextFun from "./database";
import { UserProvider } from "./Pages/Context/UserContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <UserProvider>
        <ContextFun>
          <App />
        </ContextFun>
      </UserProvider>
    </Router>
  </StrictMode>
);
