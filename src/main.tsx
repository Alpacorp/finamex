import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./containers/AppRouter";
import { ScoreProvider } from "./context/ScoreContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ScoreProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ScoreProvider>
  </React.StrictMode>
);
