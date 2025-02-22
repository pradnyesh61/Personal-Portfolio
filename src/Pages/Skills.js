import React, { useEffect } from "react";
import "../Styles/Skills.css";

const SkillsTable = () => {
  const skills = {
    "Programming Languages": ["C", "C++", "Java", "Python"],
    "Databases": ["MySQL", "Oracle", "H2", "Firebase", "MongoDB", "DB2"],
    "Development": ["Web-Development", "Android-Development"],
    "Frameworks": ["Spring Boot", "Angular", "React", "Apache Camel", "Apache Spark"],
    "Tools & Technologies": ["GitHub", "Swagger", "AWS", "REST APIs", "SonarQube"],
    "Concepts": ["Data Structures & Algorithms", "Microservices", "Security Policies"]
  };

  return (
    <div className="skills-container">
        <table className="skills-table">
            <tbody>
                {Object.entries(skills).map(([category, values], index) => (
                    <tr key={index}>
                        <th>{category}</th>
                        <td>
                            <div className="skills-blocks">
                                {values.map((value, idx) => (
                                    <span key={idx} className="skills-block">{value}</span>
                                ))}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
};



function Skills() {
  return (
    <div className="skills">
      <h1>What can I do</h1>
      <SkillsTable />
    </div>

  );
}

export default Skills;
