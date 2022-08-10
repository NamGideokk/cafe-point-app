import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EarnPointContainer from "./components/earnPoint/EarnPointContainer";
import FormContainer from "./components/login/FormContainer";
import SignUpFormContainer from "./components/signUp/SignUpFormContainer";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<FormContainer />} />
      <Route path="/signup" element={<SignUpFormContainer />} />
      <Route path="/earnpoint" element={<EarnPointContainer />} />
    </Routes>
  );
}

export default App;
