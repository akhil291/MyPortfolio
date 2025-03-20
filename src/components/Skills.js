import React from "react";
import "../styles/Skills.css";

const skills = [
  { name: "Java", level: 100 },
  { name: "HTML", level: 100 },
  { name: "CSS", level: 100 },
  { name: "JavaScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 85 },
  { name: "React.js", level: 95 },
  { name: "Angular", level: 90 },
  { name: "Spring Boot", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "MySQL", level: 80 },
  { name: "Quick Learner", level: 95 },
  { name: "Communication", level: 90 },
  { name: "Teamwork", level: 95 },
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-progress" style={{
    width: `${skill.level}%`,
    animation: `fillBar 2s ease-in-out forwards`,
    "--skill-width": `${skill.level}%`
  }}>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
