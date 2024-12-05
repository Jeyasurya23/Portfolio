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
            longDescription: "The Cafe Website project is a visually appealing and user-friendly web application designed to showcase a cafe’s menu, ambiance, and services effectively. Built using HTML and CSS, this project emphasizes the principles of responsive design, ensuring that the website is accessible and functional across all devices, from desktops to mobile phones. The homepage features an inviting hero section with high-quality visuals that capture the cafe’s vibe, followed by sections dedicated to the menu, customer testimonials, and contact information. The menu is presented in an organized layout, highlighting items and their pricing while maintaining readability and aesthetic appeal. Key design techniques, such as CSS Flexbox and Grid, are utilized to create a well-structured and fluid layout. The navigation bar is intuitive and remains consistent across pages, providing users with a seamless browsing experience. Accessibility is a core focus of this project, with features like clear typography, sufficient color contrast, and alt text for images to cater to all users, including those with disabilities. Additionally, the website is optimized for fast load times, ensuring smooth performance even on slower connections. This project serves as an excellent example of how modern web technologies can be leveraged to create engaging, responsive, and accessible websites tailored to specific industries. By focusing on usability, aesthetics, and technical efficiency, the Cafe Website reflects the importance of delivering a perfect user experience for both potential customers and businesses."
        },
        {
            title: "Weather App: Building with API Integration",
            shortDescription: "Exploring the process of creating a weather app with live data using the OpenWeatherMap API.",
            longDescription: "The Weather App is a sleek and functional application designed to provide real-time weather updates by leveraging the OpenWeatherMap API. This project focuses on integrating external APIs, processing JSON responses, and dynamically updating the user interface to deliver accurate and relevant weather information. Users can search for any city worldwide and instantly view the current temperature, weather conditions, humidity, and wind speed. The app also displays an icon representation of the weather, such as sunny, cloudy, or rainy, for a visually engaging experience. The application uses JavaScript for handling API requests and parsing responses, while HTML and CSS create a clean and responsive user interface. Advanced error handling is implemented to manage scenarios like invalid city names or network issues, ensuring reliability. The project demonstrates proficiency in asynchronous programming with the `fetch` API and promises, ensuring seamless data retrieval without interrupting the user experience. The layout is designed to adapt to various screen sizes, making the app accessible on desktops and mobile devices alike. This Weather App project highlights the practical use of APIs to deliver dynamic content and showcases skills in integrating third-party services into modern web applications. By combining technical efficiency with an intuitive design, it serves as a robust example of building interactive and informative applications that address real-world needs. Whether for learning or practical use, this project embodies the fusion of creativity and technology."
        },
        {
            title: "Gift Selector: Interactive Experience with jQuery",
            shortDescription: "An interactive gift selection app built using jQuery to enhance user experience with dynamic features.",
            longDescription:"The Gift Selector is an interactive web application designed to make gift selection easy and enjoyable by utilizing jQuery for dynamic user experiences. This project focuses on creating a smooth and engaging interface where users can select, customize, and view gifts. With the help of jQuery, the app incorporates animations, transitions, and real-time updates, making the process more visually appealing. Users can interact with the app to filter gifts based on preferences, browse through various options, and see instant visual feedback for their choices. The app’s interface is designed to be intuitive and responsive, ensuring a seamless experience on both desktop and mobile devices. The use of jQuery allows for efficient handling of DOM manipulations, event listeners, and UI updates without refreshing the page, making the app highly responsive. The project also showcases the implementation of front-end interactivity, offering features like hover effects, dynamic lists, and custom pop-ups. With a focus on accessibility, the app is designed to be easy to navigate for all users. Hosted on GitHub Pages, the website demonstrates how to use jQuery for building lightweight, interactive applications that deliver a fun and user-friendly experience. Whether for personal use or as a learning project, the Gift Selector highlights how jQuery can bring life to static websites and provides a hands-on example of web interactivity."
        },        
        {
            title: "To-Do List App: Organizing Tasks Efficiently",
            shortDescription: "Developing a to-do list application using React.js to manage tasks with ease.",
            longDescription: "The To-Do List App is a practical and user-friendly application designed to simplify task management. Built using React.js, this app demonstrates efficient state management and dynamic updates, making it an excellent tool for users to organize their daily activities. The application’s interface is clean and responsive, ensuring usability across a range of devices. Users can effortlessly add new tasks, mark them as completed, or delete them once no longer needed. One of the app’s standout features is task filtering, which allows users to view tasks based on their status – all, active, or completed – ensuring a clear overview of their progress. React hooks such as `useState` and `useEffect` are used extensively to manage state and side effects, ensuring smooth transitions and real-time updates. The application’s structure also incorporates reusable components, enhancing code efficiency and maintainability. CSS is utilized to create a visually appealing and minimalistic design, focusing on providing an intuitive user experience. This project showcases the practical application of React.js to solve real-world problems and highlights the importance of stateful components in creating interactive and dynamic web applications. Whether you’re a professional needing an organized workspace or a student managing homework assignments, this To-Do List App is a reliable and straightforward solution. By combining functionality with aesthetic simplicity, it effectively demonstrates the potential of modern web technologies to deliver impactful user experiences."
        },
        {
            title: "E-commerce Website: Crafting a Seamless Shopping Experience",
            shortDescription: "A breakdown of how I built a fully functional e-commerce website using React.js and CSS.",
            longDescription: "The E-commerce Website is a dynamic, feature-rich web application built using React.js and CSS to provide users with a seamless online shopping experience. This project integrates key e-commerce functionalities such as product browsing, detailed product pages, a shopping cart, and a secure checkout process. The application is designed to be intuitive and responsive, ensuring accessibility on devices of all screen sizes. The homepage showcases trending and featured products, with smooth navigation to category-based product listings. Each product page contains detailed information, including images, descriptions, and pricing, along with an ‘Add to Cart’ feature. The shopping cart allows users to manage their selected items, update quantities, and view the total cost in real time. To ensure a smooth checkout process, the site includes user authentication and payment gateway integration, providing a secure platform for transactions. The site’s performance is optimized with efficient state management using React hooks and Context API, ensuring fast and reliable data flow across components. CSS is used extensively to create a visually appealing design, with emphasis on user experience through consistent layouts and modern styling. This project demonstrates expertise in building scalable and interactive web applications, focusing on both functionality and design. It is an excellent example of combining front-end technologies with thoughtful design to create a user-centric e-commerce solution that meets the needs of modern shoppers."
        },
        {
            title: "RBAC Admin Dashboard: Streamlining Role-Based Access Control",
            shortDescription: "An interactive admin dashboard built to demonstrate Role-Based Access Control (RBAC) principles using HTML, CSS, and JavaScript.",
            longDescription: "The RBAC Admin Dashboard is a comprehensive web application designed to simplify Role-Based Access Control (RBAC) implementation for modern web systems. This project focuses on managing users, roles, and permissions efficiently to ensure secure and organized access to resources. It features an intuitive user interface where administrators can assign roles such as Admin, Manager, or Viewer to users and customize permissions based on organizational needs. Built using HTML, CSS, and JavaScript, the dashboard provides a clean, responsive layout, ensuring usability across devices. Key functionalities include the creation and deletion of roles, editing user assignments, and real-time updates to reflect access permissions dynamically. Each role is meticulously defined with specific permissions, ensuring that users can only perform actions permitted by their assigned roles. For example, an Admin can modify user roles, while a Viewer can only view dashboards without making changes. This project demonstrates critical web development concepts like dynamic DOM manipulation, secure access management, and responsive design. It also incorporates performance optimization techniques, ensuring smooth user interactions regardless of the complexity of the role structure. The RBAC Admin Dashboard is not just a technical solution but also a practical example of building secure, scalable applications that prioritize both functionality and user experience. It provides valuable insights into implementing structured access controls and is ideal for organizations seeking to streamline their access management processes."
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
                                <button className="btn btn-primary blog-button" onClick={() => toggleText(index)}>
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
