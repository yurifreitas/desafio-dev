

import React from "react"
import Layout from '../layout/index';
import Home from "./Home";
import Client from "./Client";
import Files from "./Files";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (

    <Layout>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="arquivos" element={<Files />} />
          <Route path="client" element={<Client />} />

        </Routes>

      </BrowserRouter>
    </Layout>
  )
}

