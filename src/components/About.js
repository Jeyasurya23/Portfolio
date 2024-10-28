import React, { useEffect, useState } from 'react';
import profile from './assets/Profile.jpg';
import './About.css';

const About = ({ theme }) => {
    const [isBlinking, setIsBlinking] = useState(true); // State to control blinking
    const [isFinished, setIsFinished] = useState(false); // State to control end of typing

    useEffect(() => {
        // Duration for typing and blinking effect
        const typingDuration = 4000; // Adjust based on typewriter effect timing
        const blinkDuration = 500; // Optional brief blinking after typing ends

        const timer = setTimeout(() => {
            setIsBlinking(false); // Stop blinking
            setIsFinished(true); // Mark as finished
        }, typingDuration + blinkDuration); // Stop blinking after typing and brief blink

        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    return (
        <section className={`container py-5 rounded ${theme} about-section about`}>
            <div className="row align-items-center">
                {/* Image on the left */}
                <div className="col-md-4 text-center">
                    <img src={profile} alt="Jeyasurya" className="img-fluid rounded-circle profile-img" />
                </div>

                {/* Text content on the right */}
                <div className="col-md-8">
                    <h2 className="about-name">Jeyasurya</h2>
                    <p className={`about-title ${isBlinking ? 'blinking' : ''} ${isFinished ? 'finished' : ''}`}>
                        Frontend Developer | Full Stack Developer
                    </p>

                    <p className="about-description">
                        Hello! I'm Jeyasurya, a Frontend Developer with a passion for creating interactive, user-friendly websites and applications. I have experience with full stack development and a knack for problem-solving. Let's build something amazing together!
                    </p>
                    <div className="text-center text-md-center">
                        <a href="https://drive.google.com/file/d/13SIVJYm7FvwBFbCnkEjfZp_tTs_esQfP/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg mt-3 about-btn">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
