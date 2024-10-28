import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
    const [expanded, setExpanded] = useState(Array(5).fill(false));

    const toggleText = (index) => {
        const updatedExpanded = [...expanded];
        updatedExpanded[index] = !updatedExpanded[index];
        setExpanded(updatedExpanded);
    };

    const blogs = [
        {
            title: "Building a Cafe Website: Crafting the Perfect User Experience",
            shortDescription: "A deep dive into how I developed a responsive cafe website using HTML and CSS.",
            longDescription: "Learn about responsive design techniques, layout optimization, and accessibility features."
        },
        {
            title: "Weather App: Building with API Integration",
            shortDescription: "Exploring the process of creating a weather app with live data using the OpenWeatherMap API.",
            longDescription: "From managing API requests to dynamically displaying weather information, discover the key features of this project."
        },
        {
            title: "To-Do List App: Organizing Tasks Efficiently",
            shortDescription: "Developing a to-do list application using React.js to manage tasks with ease.",
            longDescription: "Learn about state management, task filtering, and the dynamic updates that make this app highly functional."
        },
        {
            title: "E-commerce Website: Crafting a Seamless Shopping Experience",
            shortDescription: "A breakdown of how I built a fully functional e-commerce website using HTML, CSS, and JavaScript.",
            longDescription: "Explore the product listings, shopping cart functionality, and checkout process integration that make this site user-friendly."
        },
        {
            title: "Portfolio Website: Presenting Projects and Skills Effectively",
            shortDescription: "Learn how I built my personal portfolio website to showcase projects, skills, and achievements.",
            longDescription: "Using React and Bootstrap, I created a responsive and elegant design that highlights my development journey."
        }
    ];

    return (
        <section className="container blogs">
            <h2 className="text-center mb-4">Blog / Articles</h2>
            <p className="text-center text-muted">"Sharing my journey through coding and development."</p>
            <div className="row">
                {blogs.map((blog, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                        <div className="card h-100 skill-card">
                            <div className="card-body">
                                <h3 className="card-title">{blog.title}</h3>
                                <p className="card-text">{blog.shortDescription}</p>
                                {expanded[index] && <span>{blog.longDescription}</span>} <br />
                                <button className="btn btn-primary animated-button" onClick={() => toggleText(index)}>
                                    {expanded[index] ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
