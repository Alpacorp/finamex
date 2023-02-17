import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "@rollbar/react";
import { Analytics } from "@vercel/analytics/react";

import { AppRouter } from "./containers/AppRouter";

import { ScoreProvider } from "./context/ScoreContext";

import { rollbarConfig } from "./Telemetry/rollbar-config";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider config={rollbarConfig}>
      <ScoreProvider>
        <BrowserRouter>
          <AppRouter />
          <Analytics />
        </BrowserRouter>
      </ScoreProvider>
    </Provider>
  </React.StrictMode>
);
