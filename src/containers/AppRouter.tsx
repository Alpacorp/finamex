import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import { App } from "../pages/App";

export const AppRouter: FC = () => {
  const maintenance = import.meta.env.VITE_MAINTENANCE || "false";
  const mode = import.meta.env.VITE_MODE || "production";
  const apiUrlDev =
    import.meta.env.VITE_API_URL_DEV || "http://localhost:5000/api/form";
  const apiUrlProd =
    import.meta.env.VITE_API_URL_PROD || "https://api.form.com/api/form";
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
