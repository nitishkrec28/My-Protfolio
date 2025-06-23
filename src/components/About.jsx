import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section">
            <h2>About Me</h2>
            <p>
                Hello! I am <span className="about-highlight">Nitish Kumar</span>, a Cyber Security Engineer and Ethical Hacking Expert with a passion for securing digital infrastructures. 
            </p>
            <p>
                I hold a <span className="about-highlight">B.Tech. in Computer Science & Engineering (Cyber Security)</span> and have over 5 years of experience in the field. My expertise lies in protecting sensitive information, conducting penetration testing, and teaching others about cyber safety.
            </p>
            <p>
                Beyond my professional work, I enjoy hosting workshops and webinars to spread awareness about the importance of online security. I am dedicated to helping individuals and organizations stay safe in an increasingly digital world.
            </p>
        </section>
    );
};

export default About;
