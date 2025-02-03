import React from 'react'

function SkillItem({image,name}) {
  return (
    <div  className="skillsItem">
         <div style={{backgroundImage:`url(${image}`}} className="bgImage"/>
          <h1>{name}</h1>
    </div>
  )
}

export default SkillItem
