import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import '../Styles/Footer.css'


function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
           

          <a
          href="https://www.linkedin.com/in/pradnyesh-salunke-b41666191/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon/>
        </a>

        <a
          href="https://github.com/pradnyesh61"
          target="_blank"
          rel="noopener noreferrer"
        >
             <GitHubIcon />
        </a>


        
        </div>
        
        <p>&copy; 2025,Reserved.</p>


    </div>
  )
}

export default Footer
