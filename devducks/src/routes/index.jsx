import React from "react";
import { Routes, Route } from "react-router-dom";
import  Home  from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Dashboard" element={<Dashboard/>} />
  </Routes>
  
);

export default RoutesMain;
