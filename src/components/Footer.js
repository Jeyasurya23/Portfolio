import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = ({ isDarkTheme }) => {
    return (
        <footer className={`footer ${isDarkTheme ? 'bg-dark' : 'bg-light'} text-center`}>
            <div className="container">
                <h4>Jeyasurya</h4>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/jeyasurya-g?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://github.com/Jeyasurya23" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaGithub />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.instagram.com/x_.deadpool_x/profilecard/?igsh=MXVwODcyaGUxb3g4Zw==" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaInstagram />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="mailto:jeyasurya0100@gmail.com" className="social-link">
                            <FaEnvelope />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
