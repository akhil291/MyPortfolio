import React from 'react';
import '../styles/Home.css';
import profileImage from '../assets/Profile.jpeg';
import { FaPhoneAlt, FaDownload } from "react-icons/fa"; 

const Home = () => {
  const handleHireMeClick = () => {
    window.location.href = "mailto:akhilnani274@gmail.com?subject=Hiring%20Opportunity&body=Hello%20Akhilananda,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20hiring%20opportunity%20with%20you.";
  };

  const handleDownloadResume = () => {
    const resumePath = process.env.PUBLIC_URL + "/AkhilanandaCV.pdf"; 
    const link = document.createElement("a");
    link.href = resumePath;
    link.setAttribute("download", "AkhilanandaCV.pdf"); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi,<br /> I'm <span className="highlight">Akhilananda</span><br /> a Full Stack Developer</h1>
        <p>
          To secure an outstanding position in an organization that offers both growth and satisfaction, 
          where I can contribute, utilize my skills, and gain valuable experience.
        </p>

        
        <div className="phone">
          <FaPhoneAlt className="phone-icon" /> +91 7993282133
        </div>

        <div className="buttons">
          <button className="btn download-resume" onClick={handleDownloadResume}>
            <FaDownload className="icon" /> Resume
          </button>
          <button className="btn hire-me" onClick={handleHireMeClick}>Hire Me</button> 
        </div>
      </div>
      <div className="profile">
        <img src={profileImage} alt="Akhilananda" />
      </div>
    </section>
  );
}

export default Home;
