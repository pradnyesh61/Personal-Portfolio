import React from "react";
import p1 from "../assets/1.jpg";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "../Styles/Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u77iot3",
        "template_jhuexte",
        form.current,
        "Me6RVb5bzEvHPK1Om"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div class="flex-container">
      <div class="flex-child">
        <img src={p1} alt="Logo" className="images" />
        <h2>Pradnyesh Balasaheb Salunke</h2>
        <h3>Full Stack Engineer</h3>
        <LinkedInIcon />
        <GitHubIcon />
      </div>

      <div  class="flex-child" id="form-div">
        <br></br>
        <form ref={form} onSubmit={sendEmail}>
         
          <label>Name</label>
          <input type="text" name="user_name" />
          <br></br>
         
          <label>Phone Number</label>
          <input type="text" name="user_contact" />
          <br></br>
         
          <label>Email</label>
          <input type="email" name="user_email" />
          <br></br>
         
          <label>Subject</label>
          <input type="text" name="subject" />
          <br></br>
         
          <label>Message</label>
          <textarea type="text" name="message" />
          <br></br>
         
          <input type="submit" value="Send" />
        
        </form>
      </div>
    </div>
  );
}

export default Contact;
