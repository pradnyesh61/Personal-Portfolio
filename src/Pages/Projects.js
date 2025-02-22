import React from 'react'
import { ProjectList } from '../Helpers/ProjectList'
import ProjectItem from '../Components/ProjectItem'
import "../Styles/Projects.css"

function Projects() {
  return (
    <div className="projects">
      <h1>What I've Build</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjectItem id = {idx}  name = {project.name} image = {project.image[0].src}/>
        })}


      </div>
    </div>
  )
}

export default Projects
