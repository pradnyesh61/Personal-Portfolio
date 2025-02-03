import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../Styles/Navbar.css";

function Navbar() {
  const [ExpandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={ExpandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to = "/qualification">Qualification</Link> */}
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/cp_profile">CP_Profile</Link>
        <a
          className="resume"
          // href="https://drive.google.com/file/d/1PMdbvLSmBeJP1jcNEcrsCE9_0FWDI-VH/view?usp=sharing"
          href="https://drive.google.com/file/d/1PMdbvLSmBeJP1jcNEcrsCE9_0FWDI-VH/view?usp=sharing"
          target="_blank"
          download
        >
          Resume
        </a>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
