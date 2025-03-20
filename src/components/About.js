import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/Profile.jpeg'; 
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
        <div className="about-image">
          <img src={profileImage} alt="Pendyala Akhilananda" />
        </div>

        <div className="about-text">
          <h2>About <span className="highlight">Me</span></h2>
          <p className="intro">
            Hi, I'm <b>Pendyala Akhilananda</b>, a passionate full-stack developer skilled in <b>Java, 
            Spring Boot, React.js, Node.js, MongoDB, and MySQL</b>. I specialize in building <b>scalable web 
            applications</b> and continuously explore new technologies to enhance user experiences.
          </p>

          <div className="education-section">
            <h3>Education</h3>
            <div className="education">
              <div className="edu-item">
                <h4>B.Tech (CSE)</h4>
                <p>Lovely Professional University (2019 - 2023)</p>
                <p className="edu-score">CGPA: 7.02/10.0</p>
              </div>
              <div className="edu-item">
                <h4>Senior Secondary</h4>
                <p>Sri Chaitanya Junior College (2017 - 2019)</p>
                <p className="edu-score">Percentage: 85.4%</p>
              </div>
              <div className="edu-item">
                <h4>Matriculation</h4>
                <p>Sri Chaitanya High School (2009 - 2017)</p>
                <p className="edu-score">CGPA: 8.0/10.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
