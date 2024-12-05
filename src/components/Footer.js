import React from 'react';
import './Footer.css';
import { FaXTwitter, FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa6';

const Footer = ({ isDarkTheme }) => {
    const socialLinks = [
        {
            icon: <FaLinkedin size={20} />,
            url: "https://www.linkedin.com/in/jeyasurya-g",
            label: "LinkedIn"
        },
        {
            icon: <FaGithub size={20} />,
            url: "https://github.com/Jeyasurya23",
            label: "GitHub"
        },
        {
            icon: <FaXTwitter size={20} />,
            url: "https://x.com/_Jeyasurya?s=09",
            label: "Twitter"
        },
        {
            icon: <FaEnvelope size={20} />,
            url: "mailto:jeyasurya0100@gmail.com",
            label: "Email"
        }
    ];

    return (
        <footer className={`footer ${isDarkTheme ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
            <div className="container py-4">
                <div className="row align-items-center">
                    <div className="col-12 text-center">
                        <h4 className="mb-4 fw-bold">Jeyasurya</h4>
                        
                        <ul className="social-icons-list">
                            {socialLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`social-icon ${isDarkTheme ? 'text-light' : 'text-dark'}`}
                                        aria-label={link.label}
                                    >
                                        {link.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="copyright-section">
                            <p className="mb-0">
                                <small className={`${isDarkTheme ? 'text-light' : 'text-dark'}`}>
                                    Made with <FaHeart className="heart-icon" /> by Jeyasurya © {new Date().getFullYear()}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
