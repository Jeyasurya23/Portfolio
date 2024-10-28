import React from 'react';
import './Projects.css'
import cafepic from './assets/cafe.png';
import weatherpic from './assets/weather.png';
import todopic from './assets/to-do.png';
import ecompic from './assets/e-com.png';
import portfoliopic from './assets/portfolio.png';

const projects = [
    {
        title: "Cafe Website",
        description: "A responsive cafe website showcasing the menu, ambiance, and specialties of the cafe. It features an intuitive layout with sections for different categories, a welcoming interface, and interactive elements to enhance user experience. The site adapts seamlessly across various devices, ensuring accessibility and optimal viewing for all users.",
        technologies: "HTML, CSS",
        codeLink: "https://github.com/Jeyasurya23/cafe-website",
        liveLink: "https://jeyasurya23.github.io/cafe-website/index.html",
        imgSrc: cafepic,
    },
    {
        title: "Weather App",
        description: "A responsive weather app that provides real-time updates for any city, displaying current conditions, humidity, and a 5-day forecast using the OpenWeatherMap API. Users can easily search for specific locations or explore random cities for weather information, all within a user-friendly interface.",
        technologies: "HTML, CSS, JavaScript, OpenWeatherMap API",
        codeLink: "https://github.com/Jeyasurya23/weather-app",
        liveLink: "https://jeyasurya23.github.io/weather-app/",
        imgSrc: weatherpic,
    },
    {
        title: "To-Do Application",
        description: "A responsive to-do list app that allows users to create, edit, and delete tasks while providing an intuitive user interface. Features include task filtering, local storage for persistent data, and dynamic updates, ensuring a seamless user experience across devices.",
        technologies: "HTML, CSS, JavaScript",
        codeLink: "https://github.com/Jeyasurya23/To-do",
        liveLink: "https://jeyasurya23.github.io/To-do/",
        imgSrc: todopic,
    },
    {
        title: "E-com Website",
        description: "The E-Commerce website is a responsive online shopping platform built with React and Bootstrap, featuring an intuitive interface for seamless navigation. Users can browse a diverse range of products with detailed descriptions and easily manage their shopping cart. The site is optimized for all devices, ensuring a consistent and engaging shopping experience.",
        technologies: "CSS, React",
        codeLink: "https://github.com/Jeyasurya23/e-com",
        liveLink: "https://jeyasurya23.github.io/e-com/",
        imgSrc: ecompic,
    },
    {
        title: "Portfolio",
        description: "The portfolio includes interactive elements and animations that enhance user engagement, showcasing my expertise in front-end development. With React's component-based architecture, the site is easy to maintain and scale, while Bootstrap provides a robust framework for responsive design. This project highlights my proficiency in using modern web technologies to create visually appealing and functional web applications.",
        technologies: "React, Bootstrap",
        codeLink: "https://github.com/Jeyasurya23/Portfolio",
        liveLink: "#",
        imgSrc: portfoliopic,
    }
    
];

const Projects = () => {
    return (
        <section  className="container projects">
            <h2 className="text-center mb-5">Projects</h2>
            <p className="text-center text-muted">"Creating innovative solutions that make a difference."</p>
            <div className="row" style={{margin:"10px 20px"}}>
                {projects.map((project, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100">
                            <img 
                                src={project.imgSrc} 
                                className="card-img-top" 
                                alt={project.title || "Project image"} 
                                onError={(e) => { e.target.src = 'fallback-image.jpg'; }} // Fallback image
                            />
                            <div className="card-body">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-text">{project.description}</p>
                                <p><strong>Technologies:</strong> {project.technologies}</p>
                                <a href={project.codeLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Code</a>
                                <a href={project.liveLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{marginLeft:"5px"}}>Live Demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
