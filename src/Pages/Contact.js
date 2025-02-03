// import React from "react";
// import p1 from "../assets/1.jpg";

// import GitHubIcon from "@material-ui/icons/GitHub";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";

// import { useRef } from "react";
// import emailjs from "@emailjs/browser";

// import "../Styles/Contact.css";

// function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_u77iot3",
//         "template_jhuexte",
//         form.current,
//         "Me6RVb5bzEvHPK1Om"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div class="flex-container">
//       <div class="flex-child">
//         <img src={p1} alt="Logo" className="images" />
//         <h2>Pradnyesh Balasaheb Salunke</h2>
//         <h3>Full Stack Engineer</h3>
//         <LinkedInIcon />
//         <GitHubIcon />
//       </div>

//       <div  class="flex-child" id="form-div">
//         <br></br>
//         <form ref={form} onSubmit={sendEmail}>
         
//           <label>Name</label>
//           <input type="text" name="user_name" />
//           <br></br>
         
//           <label>Phone Number</label>
//           <input type="text" name="user_contact" />
//           <br></br>
         
//           <label>Email</label>
//           <input type="email" name="user_email" />
//           <br></br>
         
//           <label>Subject</label>
//           <input type="text" name="subject" />
//           <br></br>
         
//           <label>Message</label>
//           <textarea type="text" name="message" />
//           <br></br>
         
//           <input type="submit" value="Send" />
        
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;


import React, { useRef } from "react";
import p1 from "../assets/1.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <img src={p1} alt="Logo" className="images" />
        <h2>Pradnyesh Balasaheb Salunke</h2>
        <h3>Full Stack Engineer</h3>
        <LinkedInIcon />
        <GitHubIcon />
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

          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
