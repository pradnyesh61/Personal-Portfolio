import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Qualification.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

function Qualification() {
  return (
    <div className="qualification">
      <div>
        <h2> Qualification</h2>
        <h3> My Personal Journey</h3>
        {/* <h3  style={{color: "RGB(236, 240, 243)"}}> My Personal Journey</h3>*/}
      </div>
      <div className="links">
        <Link to="/education">
          <SchoolIcon /> Education
        </Link>
        <Link to="/work">
          <WorkIcon /> Work
        </Link>
      </div>
    </div>
  );
}

export default Qualification;
