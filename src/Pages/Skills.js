import React from 'react'
import { useEffect } from "react"
import SkillItem from '../Components/SkillItem'
import { SkillList } from '../Helpers/SkillList'

import '../Styles/Skills.css'


function Skills() {

  const getData = async() => {
    try{
      const url = "https://docs.google.com/spreadsheets/d/1RqYnd8QLzut5ym6N-QMm9JH_vWrGEQLH/export?format=csv";    
      fetch(url).then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        // Work with JSON data here
        console.log(data);
      }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });

      fetch(url).then(result=>{
        console.log(result);
        console.log("bye")
        result.text().then(csvtext => {
        console.log("Hello")
        console.log(csvtext)})
    });

   
      // const res = await fetch(
      //  "https://docs.google.com/spreadsheets/d/1RqYnd8QLzut5ym6N-QMm9JH_vWrGEQLH/export?format=csv"
      // );
   //   console.log(res);
  
  }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
getData();
  });

  return (
<div className="skills">
      <h1>What can I do</h1>
      <div className="skillsList">
        {SkillList.map((project, idx) => {
          return <SkillItem id = {idx}  name = {project.name} image = {project.image}/>
        })}


      </div>
    </div>
  )
}

export default Skills
