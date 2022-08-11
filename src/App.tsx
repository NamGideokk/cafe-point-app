import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Point from "./pages/Point";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/earnpoint" element={<Point />} />
    </Routes>
  );
}

export default App;
