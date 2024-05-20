import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Marketing from "./components/marketing";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Marketing />} />{" "}
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
