import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Bubu from "./Bubu";

const Routings = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/boo" element={<Bubu/>} />
      </Routes>
    </Router>
  );
};

export default Routings;
