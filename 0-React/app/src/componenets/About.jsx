// About.js

import React from 'react';
import './About.css'; // Import the CSS file

const Project = ({ title, description, stack }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>
        <strong>Tech Stack:</strong> {stack}
      </p>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        Experienced Java, Spring Boot, and React Developer with a passion for learning new technology.
        I try writing efficient, clean code and follow design patterns. I am enthusiastic about continuous
        learning and keeping up with the latest technological advancements in my field.
      </p>

      <h1>Work Experience</h1>
      <h2>2022 - Current: Mintifi : Software Developer</h2>
      <p>
        <strong>ERP Integration:</strong> Migration project with 100% improved efficiency (SpringBoot 3.x.x)
      </p>
      <p>
        <strong>Risk Grading:</strong> Extracting and calculation of financial data from BigQuery, helped analyze
        lending risks stats data with UI (Quarkus)
      </p>

      <h2>2019 - 2021: BYJUs : Sr BDA</h2>
      <p>
        Drive successful revenue and sales for the org. Managing customer data and filters: SQL, CRM, LeadSquare.
      </p>

      <h1>Skills</h1>
      <ul>
        <li>Core JAVA, OOP</li>
        <li>Data structure & Algorithms</li>
        <li>Back-end: Spring Boot, Quarkus</li>
        <li>Front-end: JS, React, HTML, CSS</li>
        <li>(CI/CD): Jenkins, Docker</li>
        <li>DB: MySQL, PostgreSQL, BigQuery</li>
        <li>Cloud Services: AWS EC2 , SES</li>
        <li>Rest API Development</li>
        <li>Clean Code Practices</li>
        <li>Testing: Junit 5, Postman</li>
        <li>Documentation: Swagger</li>
        <li>Security: JWT, OAuth2</li>
        <li>Cloud: AWS EC2, SES</li>
        <li>SCM: Gitlab, GitHub</li>
      </ul>

      <h1>Projects</h1>
      <Project
        title="ERP Integration + Api-Sandbox"
        description="Integration helps ERP system on-boarding with the system. Sandbox provides config for ERP & API for JWT, Upstream, Webhooks, etc."
        stack="Spring Boot 3.0.1, MySQL, Java 17"
      />

      <Project
        title="Risk Dashboard"
        description="100% automated entire manual analysis process into the dashboard. Helps you analyze & visualize the past 4 quarter data from BigQuery & Redis."
        stack="Quarkus, BigQuery, Redis"
      />

      <Project
        title="Microservices"
        description="4 microservices with different databases communicate via Rest call. Server config & Service registry help in monitoring the system."
        stack="Spring Boot 2.7.x, MySQL, Postgres, Config-server"
      />

      <Project
        title="Blog Application"
        description="Use of JPA for mapping various tables, and multipart file for images. Backend on Spring Boot with JWT security."
        stack="Spring Boot, MySQL, React, Bootstrap"
      />

      <Project
        title="Travel Management System"
        description="Responsive website, with ticket download feature using JS pdf library. AWS EC2 deployment, MERN stack used along with GitLab."
        stack="React, Express, MySQL, NodeJS"
      />

      <Project
        title="Order Management System"
        description="Part of BNPL product integrated with Flipkart. Used Amazon SES in events for publishing mails to the system."
        stack="Spring Boot 3.0.1, MySQL, Java 17"
      />

    </div>
  );
};

export default About;
