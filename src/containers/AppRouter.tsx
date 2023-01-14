import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import { App } from "../pages/App";
import { Target } from "../pages/Target";

export const AppRouter: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/*" element={<App />} />
        <Route path="/respuesta" element={<Target />} />
      </Routes>
    </Layout>
  );
};
