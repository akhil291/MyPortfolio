import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "StayBuddy - Hotel Booking Application",
      description: [
        "Developed a hotel booking web application using React.js, HTML, CSS, JavaScript, MongoDB, ExpressJS, and NodeJS.",
        "Implemented real-time hotel room availability checking and booking status updates.",
        "Ensured seamless integration between frontend and backend with RESTful APIs.",
        "Designed an intuitive UI for easy and smooth booking experiences."
      ],
      link: "https://gitlab.com/akhil291/hotel-booking"
    },
    {
      name: "The Coffee House - Cafe Management System",
      description: [
        "Developed a cafe management website using HTML, CSS, JavaScript, React, Java, Spring Boot, and MySQL.",
        "Integrated PayPal payment gateway for secure transactions.",
        "Implemented Google Sign-In and forgot password functionalities.",
        "Designed a well-structured UI and efficient backend database connectivity."
      ],
      link: "https://gitlab.com/akhil291/the-coffee-house"
    }
  ];

  return (
    <div className="projects">
      <h2>My <span className="highlight">Projects</span></h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <ul>
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on Gitlab
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
