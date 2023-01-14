import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import { App } from "../pages/App";

export const AppRouter: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </Layout>
  );
};
