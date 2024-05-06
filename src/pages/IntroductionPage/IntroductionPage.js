import React from "react";
import { useNavigate, BrowserRouter as Router } from "react-router-dom";
import _IntroductionContent from "./components/content/index.js";
import "./style.css";

function _IntroductionPage() {
    let navigate = useNavigate();
  
    return (
      <_IntroductionContent />
       
    );
  }
  export default _IntroductionPage;