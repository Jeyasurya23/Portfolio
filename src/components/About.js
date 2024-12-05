import React, { useEffect, useState } from 'react';
import profile from './assets/Profile.png';
import './About.css';
import resume from './assets/Jeyasurya-CV.pdf'

const About = ({ theme }) => {
    const [isBlinking, setIsBlinking] = useState(true); 
    const [isFinished, setIsFinished] = useState(false); 

    useEffect(() => {
        const typingDuration = 4000;
        const blinkDuration = 500; 

        const timer = setTimeout(() => {
            setIsBlinking(false); 
            setIsFinished(true);  
        }, typingDuration + blinkDuration); 

        return () => clearTimeout(timer); 
    }, []);

    return (
        <section className={`container py-5 rounded ${theme} about-section about`}>
            <div className="row align-items-center">
                <div className="col-md-4 text-center">
                    <img src={profile} alt="Jeyasurya" className="img-fluid rounded-circle profile-img" />
                </div>
                <div className="col-md-8">
                    <h2 className="about-name">Jeyasurya</h2>
                    <p className={`about-title ${isBlinking ? 'blinking' : ''} ${isFinished ? 'finished' : ''}`}>
                        Frontend Developer | Full Stack Developer
                    </p>

                    <p className="about-description">
                        Hello! I'm Jeyasurya, a Frontend Developer with a passion for creating interactive, user-friendly websites and applications. I have experience with full stack development and a knack for problem-solving. Let's build something amazing together!
                    </p>
                    <div className="text-center text-md-center">
                        <a href={resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg mt-3 about-btn">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
