import React from 'react';
import './Certificate.css';
import fullstack from './assets/certificate/fullstack.png';
import javascript from './assets/certificate/javascript.png';
import python from './assets/certificate/python.png';
import ibm from './assets/certificate/ibm.png';

const certificates = [
    {
        title: "Full Stack Development with Python",
        organization: "GUVI GEEK NETWORKS PRIVATE LIMITED",
        date: "September 2023",
        description: "The Full Stack Development with Python certificate from GUVI Geek Networks recognizes expertise in building end-to-end web applications. The course covers frontend (HTML, CSS, JavaScript), backend (Python with Django), and database management. It emphasizes practical projects, enabling proficiency in full-stack development",
        credentialLink: "https://www.guvi.in/share-certificate/6w7a133oD4A1M26m49",
        imgSrc: fullstack,
    },
    {
        title: "JavaScript",
        organization: "GUVI GEEK NETWORKS PRIVATE LIMITED",
        date: "September 2023",
        description: "The JavaScript Algorithms and Data Structures certification from GUVI Geek Networks recognizes expertise in JavaScript programming, covering core concepts like variables, data types, loops, functions, and more. It emphasizes practical projects, enabling proficiency in JavaScript and problem-solving skills.",
        credentialLink: "https://www.guvi.in/verify-certificate?id=2d099k6r256i45Au1Y",
        imgSrc: javascript,
    },
    {
        title: "Python",
        organization: "GUVI GEEK NETWORKS PRIVATE LIMITED",
        date: "July 2023",
        description: "The Python Programming certification from GUVI Geek Networks recognizes expertise in Python programming, covering core concepts like variables, data types, loops, functions, and more. It emphasizes practical projects, enabling proficiency in Python and problem-solving skills.",
        credentialLink: "https://www.guvi.in/verify-certificate?id=Z054GJ126m39g0q26F",
        imgSrc: python,
    },
    {
        title: "Introduction to Cloud",
        organization: "IBM Developer Skills Network",
        date: "May 2023",
        description: "The Introduction to Cloud certification from IBM Developer Skills Network recognizes expertise in cloud computing concepts and services. It covers cloud fundamentals, infrastructure as code, and cloud-native applications. It emphasizes practical projects, enabling proficiency in cloud computing and problem-solving skills.",
        credentialLink: "https://courses.tnsdc.skillsnetwork.site/certificates/56601c9d86b84d67a68ef51d05014883",
        imgSrc: ibm,
    },
];

const Certificate = () => {
    return (
        <section className="container certificates">
            <h2 className="text-center mb-5 title">Certificates</h2>
            <p className="text-center  mb-4 sub">"Continuous learning and professional development."</p>
            
            <div className="row">
                {certificates.map((certificate, index) => (
                    <div className="col-lg-3 col-md-6 mb-4" key={index}>
                        <div className="card h-100 certificate-card">
                            <img
                                src={certificate.imgSrc}
                                className="card-img-top certificate-img"
                                alt={certificate.title}
                                onError={(e) => { e.target.src = 'fallback-image.jpg'; }}
                            />
                            <div className="card-body">
                                <h3 className="card-title">{certificate.title}</h3>
                                <h4 className="organization">{certificate.organization}</h4>
                                <p className="date">{certificate.date}</p>
                                <p className="card-text">{certificate.description}</p>
                                <div className="button-container">
                                    <a 
                                        href={certificate.credentialLink} 
                                        className="btn btn-primary certificate-btn" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        View Certificate
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

export default Certificate; 