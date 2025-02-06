import React from 'react'

// import p1 from "../assets/1.jpg"

import p1 from "../assets/Pradnyesh.jpg"
import '../Styles/About.css'


export default function About() {
  
  const getExperience = () => {

    const startDate = new Date('2022-07-27'); // Replace with your start date
    const endDate = new Date(); // This will be today's date

    const yearsExperience = Math.abs(endDate.getFullYear() - startDate.getFullYear());
    const monthsDifference = Math.abs(endDate.getMonth() - startDate.getMonth());  // Use Math.abs to make the difference absolute
    

    return <p>With over {yearsExperience}.{monthsDifference} years of experience, I have worked on a variety of tech stacks, including React, Java, Spring Boot, and Apache Spark.</p>;
  }

  return (
    <div className= "about">
      
      <div className="bgImageAbout" style={{backgroundImage:`url(${p1}`}}  ></div>

      <div className="details ">

        <h1>Who Am I...?</h1>
        <p>Hello! I am Pradnyesh Salunke and I enjoy creating things that live in the World. With over getting  experience I have worked on a variety of tech stacks. </p>
        <p>In my free time I prefer Lofi music or some documentaries.</p>
        <p>I'm a Information Technology ( IT ) Engineer. </p>
        {getExperience()}

      </div>
    </div>
  )
}
