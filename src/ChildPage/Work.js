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
            <h3 className="vertical-timeline-element-title">Cognizant - Internship</h3>
            <p>
            Full Stack Java Engineer <br/><br/>
            Java Spring Boot, Rest API, Microservices, React, Angular, Swagger, DBMS ( MySQL, H2 ) <br/><br/>
            I have learned all skill's mention above and practice hand's-on With respective to skills. <br/>
            Using these skills build an Audit Management System ,where supply chain Management Organization wanted to automate the Audit process. </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2022 – Mar 2023"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Cognizant - Full Time</h3>
            <p>Programmer Analyst Trainee - Full Stack Java Engineer</p>

            <h3>OInsta </h3>
            <ul>
              <p>Apache Camel, Java, Spring Boot, Rest API, Microservices, Angular, Swagger ( Redocly ), Database - MongoDB</p>
              <p>Developed an <strong>product</strong>  for Fednow Service,where I have worked with ISO 20022 SWIFT messaging standards <br/>like -  ( Pacs.028, Pacs.002, Pacs.009 , pain.013 ) to send and/or receive faster payments across the Fednow Service. </p>
            </ul>
          
          
          </VerticalTimelineElement>



          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Mar 2023 – Nov 2023"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Cognizant - Full Time</h3>
            <p>Programmer Analyst - Full Stack Java Engineer</p>
            <h3>ABACUS - Siteminder</h3>
            <ul>
              <p>Java, Spring boot, RestAPI, Microservices, Swagger, Database - PostGreSQL</p>
              <p>Worked on migrating Abacus from site-minder to One Identity, where created <strong>Sequence Diagrams</strong>.</p>
              <p>I alone was responsible for the backend develoment for the application with 99% test coverage.</p>
            </ul>

          
          </VerticalTimelineElement>



          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Nov 2023 – Feb 2025"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Cognizant - Full Time</h3>
            <p>Programmer Analyst - Full Stack Java Engineer</p>
            <h3>BTAC - RECON</h3>
            <ul>
              <p>Java, Spring boot, RestAPI, Microservices, Swagger, Database - IBM DB2, Hydra, IDAAS - Identity as a Service</p>
              <p>Worked on migrating Business Travel Account to RECON, where alone <strong>single handedly handle one Micro-services.</strong></p>
              <p>Creating Microservices from scratch to Develop, creating service, onboard on to Hydra and deploy to production without any bugs or issue with 95% above test coverage.</p>
            </ul>
          
          
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Work;
