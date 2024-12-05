import React, { useState } from 'react';
import './Projects.css';
import cafepic from './assets/cafe.jpg';
import weatherpic from './assets/weather.png';
import todopic from './assets/to-do.png';
import ecompic from './assets/e-com.png';
import rbac from './assets/rbac.png';
import gift from './assets/gift.jpg'

const projects = [
    {
        title: "Cafe Website",
        description: "A responsive cafe website showcasing the menu, ambiance, and specialties of the cafe. It features an intuitive layout with sections for different categories, a welcoming interface, and interactive elements to enhance user experience. The site adapts seamlessly across various devices, ensuring accessibility and optimal viewing for all users.",
        technologies: ["HTML", "CSS"],
        codeLink: "https://github.com/Jeyasurya23/cafe-website",
        liveLink: "https://jeyasurya23.github.io/cafe-website/index.html",
        imgSrc: cafepic,
    },
    {
        title: "Weather App",
        description: "A responsive weather app that provides real-time updates for any city, displaying current conditions, humidity, and a 5-day forecast using the API. Users can easily search for specific locations or explore random cities for weather information, all within a user-friendly interface.",
        technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
        codeLink: "https://github.com/Jeyasurya23/weather-app",
        liveLink: "https://jeyasurya23.github.io/weather-app/",
        imgSrc: weatherpic,
    },
    {
        title: "Gift Shop WebSite",
        description: "The gift-jquery website showcases a jQuery-based solution designed to provide interactive features, likely focused on gift selection or management. Utilizing jQuery, it offers dynamic, engaging user experiences through animations and interactive elements. The site is tailored for both users seeking an intuitive interface and developers looking to integrate jQuery into their web applications. It follows a simple, static structure with an emphasis on front-end functionality and seamless interactivity.",
        technologies: ["HTML", "CSS", "JavaScript", "JQuery"],
        codeLink: "https://github.com/Jeyasurya23/gift-jquery",
        liveLink: "https://jeyasurya23.github.io/gift-jquery/",
        imgSrc: gift,
    },
    {
        title: "To-Do Application",
        description: "A responsive to-do list app that allows users to create, edit, and delete tasks while providing an intuitive user interface. Features include task filtering, local storage for persistent data, and dynamic updates, ensuring a seamless user experience across devices.",
        technologies: ["React", "CSS", "JavaScript"],
        codeLink: "https://github.com/Jeyasurya23/To-do",
        liveLink: "https://jeyasurya23.github.io/To-do/",
        imgSrc: todopic,
    },
    {
        title: "E-com Website",
        description: "The E-Commerce website is a responsive online shopping platform built with React and Bootstrap, featuring an intuitive interface for seamless navigation. Users can browse a diverse range of products with detailed descriptions and easily manage their shopping cart. The site is optimized for all devices.",
        technologies: ["CSS", "React"],
        codeLink: "https://github.com/Jeyasurya23/e-com",
        liveLink: "https://jeyasurya23.github.io/e-com/",
        imgSrc: ecompic,
    },
    {
        title: "RBAC App",
        description: "The app is a role-based access control (RBAC) system where users authenticate via predefined credentials. Admins can manage employee records on the dashboard, including adding, editing, deleting, and toggling statuses, while regular users can view the dashboard. The app stores employee data in localStorage for persistence and includes a search function. Notifications are provided by `react-toastify`, and the UI is responsive, built with Bootstrap and React Icons for a user-friendly experience.",
        technologies: ["Bootstrap", "React"],
        codeLink: "https://github.com/Jeyasurya23/rbac",
        liveLink: "https://jeyasurya23.github.io/rbac/",
        imgSrc: rbac,
    }
];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.technologies.some(tech => tech.includes(selectedCategory)));

    return (
        <section className="container projects">
            <h2 className="text-center mb-5">Projects</h2>
            <p className="text-center text-muted mb-4">"Creating innovative solutions that make a difference."</p>
            
            <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
                <button 
                    className={`btn ${selectedCategory === 'All' 
                        ? 'btn-primary' 
                        : 'btn-outline-primary'} rounded-pill px-4`}
                    onClick={() => setSelectedCategory('All')}
                >
                    All
                </button>
                <button 
                    className={`btn ${selectedCategory === 'HTML' 
                        ? 'btn-primary' 
                        : 'btn-outline-primary'} rounded-pill px-4`}
                    onClick={() => setSelectedCategory('HTML')}
                >
                    HTML & CSS
                </button>
                <button 
                    className={`btn ${selectedCategory === 'JavaScript' 
                        ? 'btn-primary' 
                        : 'btn-outline-primary'} rounded-pill px-4`}
                    onClick={() => setSelectedCategory('JavaScript')}
                >
                    JavaScript
                </button>
                <button 
                    className={`btn ${selectedCategory === 'React' 
                        ? 'btn-primary' 
                        : 'btn-outline-primary'} rounded-pill px-4`}
                    onClick={() => setSelectedCategory('React')}
                >
                    React
                </button>
                <button 
                    className={`btn ${selectedCategory === 'Full Stack' 
                        ? 'btn-primary' 
                        : 'btn-outline-primary'} rounded-pill px-4`}
                    onClick={() => setSelectedCategory('Full Stack')}
                >
                    Full Stack
                </button>
            </div>

            <div className="row" style={{ margin: "10px 20px" }}>
                {filteredProjects.map((project, index) => (
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
                                <p><strong className='tech'>Technologies:</strong> {project.technologies.join(", ")}</p>
                                <div className="button-container">
                                    <a href={project.codeLink} className="btn btn-primary project-btn" target="_blank" rel="noopener noreferrer">
                                        View Code
                                    </a>
                                    <a href={project.liveLink} className="btn btn-primary project-btn" target="_blank" rel="noopener noreferrer">
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
