import React, { useRef } from "react";
import p1 from "../assets/1.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/Contact.css";

import PhoneIcon from "@mui/icons-material/Phone";     // Phone
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";



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
          toast.success("Email sent successfully...!", {
            position: "top-right",
            autoClose: 3000, // Closes after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          form.current.reset(); // Reset form after sending
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email. Try again later.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <div className="flex-container">
      <ToastContainer /> {/* Toast notification container */}
      
      <div className="flex-child">
        {/* <img src={p1} alt="Logo" className="images" /> */}
        <h1 style={{ textAlign: "center" }}>Contact Me</h1>
        
        <h3>Looking for a dedicated developer who can bring efficiency, scalability, and innovation to your next project? Let’s connect!</h3>
        <h4>Feel free to reach out through the contact details below, or fill out the form, and I will get back to you as soon as possible. Thanks!</h4>

        <h3> <PersonIcon/> Pradnyesh Balasaheb Salunke</h3>
        <h3> <PhoneIcon/> 8177855322</h3>
        <h3> <MailIcon/>  salunkepradnyesh1@gmail.com</h3>
        <h3>💻 Full Stack Engineer</h3>

      </div>
      

      <div className="flex-child" id="form-div">
        <br />
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <br />

          <label>Phone Number</label>
          <input type="text" name="user_contact" />
          <br />

          <label>Email</label>
          <input type="email" name="user_email" />
          <br />

          <label>Subject</label>
          <input type="text" name="subject" />
          <br />

          <label>Message</label>
          <textarea type="text" name="message" />
          <br />

          <input type="submit" value="Get In Touch" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
