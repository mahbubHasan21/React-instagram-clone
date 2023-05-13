import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<p>Error page</p>} />
        <Route path="/" element={<Home />} />
        <Route path="/p" element={<p>paragraph</p>} />
      </Routes>
    </div>
  );
}

export default Router;
