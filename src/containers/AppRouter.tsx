import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import { App } from "../pages/App";

export const AppRouter: FC = () => {
  const maintenance = import.meta.env.VITE_MAINTENANCE || "false";
  const mode = import.meta.env.VITE_MODE || "production";

  console.log("mode", mode, typeof mode);
  console.log("maintenance", maintenance, typeof maintenance);

  return maintenance === "true" ? (
    <h1>Mantenimiento</h1>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </Layout>
  );
};
