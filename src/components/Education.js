import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section className="container education">
            <div>
                <h2 className="text-center mb-4">Education</h2>
                <p className="text-center text-muted">"Lifelong learning is the key to success."</p>
                
                <div className="d-flex flex-column align-items-center">
                    <div className="card mb-4 box" style={{ width: '100%', maxWidth: '1000px' }}>
                        <div className="card-body">
                            <h3 className="card-title">Bachelor's Degree</h3>
                            <p className="card-text">Bachelor of Science in Computer Science</p>
                            <p className="card-text"><strong>Institution:</strong> VSB College of Engineering Technical Campus, Coimbatore</p>
                            <p className="card-text"><strong>Year:</strong> 2020 - 2024</p>
                            <p className="card-text"><strong>CGPA:</strong> 8.2</p>
                        </div>
                    </div>
                    
                    <div className="card mb-4 box" style={{ width: '100%', maxWidth: '1000px' }}>
                        <div className="card-body">
                            <h3 className="card-title">Higher Secondary Certificate</h3>
                            <p className="card-text">HSC (12th Grade)</p>
                            <p className="card-text"><strong>Institution:</strong> Jayanthi Matric Hr. Sec School, Tiruppur</p>
                            <p className="card-text"><strong>Year:</strong> 2019 - 2020</p>
                            <p className="card-text"><strong>Percentage:</strong> 58.3%</p>
                        </div>
                    </div>
                    
                    <div className="card mb-4 box" style={{ width: '100%', maxWidth: '1000px' }}>
                        <div className="card-body">
                            <h3 className="card-title">Secondary School Leaving Certificate</h3>
                            <p className="card-text">SSLC (10th Grade)</p>
                            <p className="card-text"><strong>Institution:</strong> Jayanthi Matric Hr. Sec School, Tiruppur</p>
                            <p className="card-text"><strong>Year:</strong> 2017 - 2018</p>
                            <p className="card-text"><strong>Percentage:</strong> 84.6%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
