import React from "react";

import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Denucie from "./pages/Denunie";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/denuncie" element={<Denucie />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
