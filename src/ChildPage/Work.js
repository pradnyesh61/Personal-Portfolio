import React from "react";
import Qualification from "../Pages/Qualification";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

function Work() {
  return (
    <div>
      <Qualification />

      <div>
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="January-2022 - July-2022"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Cognizant</h3>
            <p>Internship <br/>
            Full Stack Java Engineer <br/><br/>
            Java Spring Boot, Rest API, Microservices, React, Swagger, DBMS ( MySQL, H2 ) <br/><br/>
            I have learned all skill's mention above and practice on hand's-on WRT skills. <br/>
            Using these skills build an Audit Management System ,where supply chain Management Organization wanted to automate the Audit process. </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="July-2022 Present"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Cognizant</h3>
            <p>Full Time</p>
            <p>Programmer Analyst Trainee</p>
            <p>Full Stack Java Engineer</p>
            <p>Apache Camel, Java Spring Boot, Rest API, Microservices, React, Angular, Swagger ( Redocly ) , DBMS ( MySQL, H2 )</p>
            <p>Worked on Payment Status Request usecase alone - developed end-to-end API with Apache Camel, also help in Request for Payment usecase, created a nice documentation for the Project, helped to debug services hosted on docker.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Work;
