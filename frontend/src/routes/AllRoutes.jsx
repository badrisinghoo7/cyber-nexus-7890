import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AllRoutes;
