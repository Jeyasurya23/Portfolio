import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ toggleTheme, isDarkTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const smoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                window.scrollBy({
                    top: -70,
                    behavior: 'smooth',
                });
            }, 500);

            setIsOpen(false);
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg ${isDarkTheme ? 'bg-dark' : 'bg-light'} fixed-top`}>
            <div className="container-fluid">
                <a href="#main" style={{ textDecoration: 'none' }} onClick={(e) => smoothScroll(e, 'main')}>
                    <p className="navbar-brand" style={{ fontSize: "25px", display: 'flex', alignItems: 'center', margin: 0, paddingRight: '8px', fontFamily: "'Edu AU VIC WA NT Pre', sans-serif" }}>
                        <FontAwesomeIcon 
                            icon={faUserSecret} 
                            style={{ color: isDarkTheme ? "#ffffff" : "#000000", paddingRight: '8px' }} 
                        />
                        Spy-Portal
                    </p>
                </a>
                <div>
                    <button 
                        onClick={handleToggle} 
                        className="navbar-toggler d-lg-none" 
                        type="button" 
                        aria-controls="navbarNav" 
                        aria-expanded={isOpen} 
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon 
                            icon={faBars} 
                            style={{ color: isDarkTheme ? "#ffffff" : "#000000" }} 
                        />
                    </button>
                    <button 
                        onClick={toggleTheme} 
                        className="theme-toggle-btn d-lg-none" 
                        style={{ marginLeft: "5px" }}
                        aria-label={isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {isDarkTheme ? <FaSun /> : <FaMoon />}
                    </button>
                </div>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav" style={{marginLeft:'5px'}}>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a href="#about" className="nav-link" onClick={(e) => smoothScroll(e, 'about')}>
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link" onClick={(e) => smoothScroll(e, 'skills')}>
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link" onClick={(e) => smoothScroll(e, 'projects')}>
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#certificates" className="nav-link" onClick={(e) => smoothScroll(e, 'certificates')}>
                                Certificates
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#blogs" className="nav-link" onClick={(e) => smoothScroll(e, 'blogs')}>
                                Blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#education" className="nav-link" onClick={(e) => smoothScroll(e, 'education')}>
                                Education
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" onClick={(e) => smoothScroll(e, 'contact')}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className={`social-icons d-lg-none ${isOpen ? 'show-icons' : ''}`}>
                        <a href="https://github.com/Jeyasurya23" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/jeyasurya-g" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://x.com/_Jeyasurya?s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaXTwitter /></a>
                        <a href="mailto:jeyasurya0100@gmail.com" aria-label="Email"><FaEnvelope /></a>
                    </div>
                    <div className="social-icons d-none d-lg-flex ms-3">
                        <a href="https://github.com/Jeyasurya23" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/jeyasurya-g" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://x.com/_Jeyasurya?s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaXTwitter /></a>
                        <a href="mailto:jeyasurya0100@gmail.com" aria-label="Email"><FaEnvelope /></a>
                        <button onClick={toggleTheme} className="theme-toggle-btn" aria-label={isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}>
                            {isDarkTheme ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
