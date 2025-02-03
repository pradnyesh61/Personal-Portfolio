import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h2>Hi ,I'm Pradnyesh Salunke</h2>
      <h3>A Full Stack Developer</h3>
      <h3>let's Build Something Together</h3>

      <div className="socialMedia">
        <LinkedInIcon />
        <GitHubIcon />
        {/* <h3>
<a className="resume" href="https://drive.google.com/file/d/1PMdbvLSmBeJP1jcNEcrsCE9_0FWDI-VH/view?usp=sharing" target="_blank" download>Resume</a>
        </h3> */}
      </div>
    </div>
  );
}

export default Home;
