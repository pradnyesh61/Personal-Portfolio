import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Qualification.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

function Qualification() {
  return (
    <div className="qualification">
      <div className="links">
        <Link to="/education" className="educationClass"><SchoolIcon />Education</Link>
        <Link to="/work" className="workClass"> <WorkIcon  className="WorkIcon"/>Work</Link>
      </div>
     
    </div>
  );
}

export default Qualification;
