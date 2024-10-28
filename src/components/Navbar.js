import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';
import portfolioIcon from './assets/portofolio-ico.png'

const Navbar = ({ toggleTheme, isDarkTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    // Smooth scroll function with additional offset of 150px
    const smoothScroll = (e, targetId) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Scroll smoothly to the section
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Add a delay to adjust the scroll position by -150px for offset
            setTimeout(() => {
                window.scrollBy({
                    top: 250, // Adjust the scroll position with 150px offset
                    behavior: 'smooth',
                });
            }, 2000); // Adjust timeout based on scroll speed if necessary

            setIsOpen(false); // Close menu on mobile after scrolling
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg ${isDarkTheme ? 'bg-dark' : 'bg-light'} fixed-top`}>
            <div className="container-fluid">
            <p className="navbar-brand" style={{ fontSize: "20px", display: 'flex', alignItems: 'center', margin: 0 }}>
                <img src={portfolioIcon} alt="Portfolio Icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                Portfolio
            </p>


                {/* Hamburger button visible only on mobile/tablet */}
                <div>
                    <button 
                        onClick={handleToggle} 
                        className="navbar-toggler d-lg-none" 
                        type="button" 
                        aria-controls="navbarNav" 
                        aria-expanded={isOpen} 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <button 
                        onClick={toggleTheme} 
                        className="theme-toggle-btn d-lg-none" 
                        style={{ marginLeft: "5px" }}
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
                        <a href="https://github.com/Jeyasurya23" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/jeyasurya-g?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/x_.deadpool_x/profilecard/?igsh=MXVwODcyaGUxb3g4Zw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="mailto:jeyasurya0100@gmail.com"><FaEnvelope /></a>
                    </div>
                    <div className="social-icons d-none d-lg-flex ms-3">
                        <a href="https://github.com/Jeyasurya23" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/jeyasurya-g?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/x_.deadpool_x/profilecard/?igsh=MXVwODcyaGUxb3g4Zw==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="mailto:jeyasurya0100@gmail.com"><FaEnvelope /></a>
                        <button onClick={toggleTheme} className="theme-toggle-btn">
                            {isDarkTheme ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
