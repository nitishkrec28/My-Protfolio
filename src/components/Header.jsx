import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Nitish Kumar</h1>
            <p>Cyber Security Engineer | Ethical Hacking Expert</p>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
