import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import { App } from "../pages/App";
import { Terms } from "../pages/Terms";

export const AppRouter: FC = () => {
  const maintenance = import.meta.env.VITE_MAINTENANCE || "false";
  const mode = import.meta.env.VITE_MODE || "production";

  return maintenance === "true" ? (
    <h1>Mantenimiento</h1>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/*" element={<App />} />
        <Route path="/terminos" element={<Terms />} />
      </Routes>
    </Layout>
  );
};
