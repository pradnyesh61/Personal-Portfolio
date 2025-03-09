import React from 'react'

// import p1 from "../assets/1.jpg"

import p1 from "../assets/Pradnyesh.jpg"
import '../Styles/About.css'


export default function About() {
  
  const getExperience = () => {
    const startDate = new Date('2022-07-27'); // Replace with your start date
    const endDate = new Date(); // This will be today's date
  
    let yearsExperience = endDate.getFullYear() - startDate.getFullYear();
    let monthsDifference = endDate.getMonth() - startDate.getMonth();
  
    // If the current month is before the start month, adjust the years and months
    if (monthsDifference < 0) {
      yearsExperience -= 1;
      monthsDifference += 12;
    }
  
    return (
      <p>
        With over {yearsExperience}.
        {monthsDifference} years of experience, I have worked on a variety of tech stacks as Full Stack Java Engineer.</p>
    );
  };

  return (
    <div className= "about">
      
      <div className="bgImageAbout" style={{backgroundImage:`url(${p1}`}}  ></div>

      <div className="details ">

        <h1>Who Am I...?</h1>
        <p>Hello! I Pradnyesh Salunke, I'm a Information Technology ( IT ) Engineer.</p>
        <p>and I enjoy creating things that live in the World.</p>        
        {getExperience()}
      <p>including Java, Spring Boot as a Primary and React, Angular as a secondary.</p>
      <p>As a developer, I create diagrams such as flow diagrams and sequence diagrams to visualize system workflows, improve design clarity, and enhance communication between stakeholders.</p>
      <p>I have contributed to system architecture design by mapping interactions, workflows, and data flow to improve clarity ie. BAYA diagrams.</p>

      </div>
    </div>
  )
}
