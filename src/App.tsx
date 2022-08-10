import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FormContainer from "./components/login/FormContainer";
import SignUpForm from "./components/signUp/SignUpForm";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<FormContainer />} />
      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
  );
}

export default App;
