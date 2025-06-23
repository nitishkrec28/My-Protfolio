import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects-section">
            <h2>Projects</h2>
            <ul className="projects-list">
                <li className="project-item">
                    <h3>Secure Banking System</h3>
                    <p>Developed a secure architecture for online banking systems.</p>
                </li>
                <li className="project-item">
                    <h3>Penetration Testing Tool</h3>
                    <p>Created a custom tool for identifying vulnerabilities in web applications.</p>
                </li>
                <li className="project-item">
                    <h3>Online Identity Guard</h3>
                    <p>Designed a solution for safeguarding users' online identities and privacy.</p>
                </li>
            </ul>
        </section>
    );
};

export default Projects;
