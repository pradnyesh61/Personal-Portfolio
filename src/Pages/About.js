import React from 'react'

import p1 from "../assets/1.jpg"

import '../Styles/About.css'


export default function About() {
  return (
    <div className= "about">
      
      <div className="bgImage " style={{backgroundImage:`url(${p1}`}}  >Image</div>

      <div className="details ">

        <h2>Who I Am</h2>
        <p>Hello! I am Pradnyesh Salunke and I enjoy creating things that live in the World. With over getting  experience I have worked on a variety of tech stacks. </p>
        <p>In my free time I prefer Lofi music or some documentaries.</p>
        <p>I'm a Information Technology ( IT ) Engineer. </p>

      </div>
    </div>
  )
}
