

import React from "react"
import Layout from '../layout/index';
import Home from "./Home";
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
          <Route path="listagem" element={""} />

        </Routes>

      </BrowserRouter>
    </Layout>
  )
}

