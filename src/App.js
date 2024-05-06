import * as React from "react";
import './App.css';
import _IntroductionPage from "./pages/IntroductionPage/IntroductionPage.js";
import { useNavigate, BrowserRouter as Router, Routes, useRoutes, Route } from "react-router-dom";

function App() {
return (
  <div className="App">
    <Router>
      <Routes path="/" element= "<_IntroductionPage />" />
    </Router>
  </div>
);
}
export default App;