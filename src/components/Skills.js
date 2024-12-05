import React from 'react';
import './Skills.css'; 

const skillsData = [
    {
        category: 'Frontend',
        skills: [
            { name: 'HTML', icon: 'https://img.icons8.com/color/48/000000/html-5.png' },
            { name: 'CSS', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
            { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript.png' },
            { name: 'React', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
            { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/000000/bootstrap.png' }
        ]
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', icon: 'https://img.icons8.com/color/48/000000/nodejs.png' },
            { name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python.png' },
            { name: 'MySQL', icon: 'https://img.icons8.com/color/48/000000/mysql.png' }
        ]
    },
    {
        category: 'Other Skills',
        skills: [
            { name: 'Git', icon: 'https://img.icons8.com/color/48/000000/git.png' },
            { name: 'API', icon: 'https://img.icons8.com/color/48/000000/api.png' },
            { name: 'GitHub', icon: 'https://img.icons8.com/color/48/000000/github.png' },
            { name: 'VS Code', icon: 'https://img.icons8.com/color/48/000000/visual-studio-code-2019.png' }
        ]
    },
];

const Skills = () => {
    return (
        <section className="container py-5 rounded skills">
            <h2 className="text-center mb-4">Skills</h2>
            <p className="text-center text-muted">"Equipped with a diverse set of skills to tackle challenges."</p>
            <div className="row">
                {skillsData.map((skillSet, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">{skillSet.category}</h3>
                                <ul className="list-unstyled">
                                    {skillSet.skills.map((skill, idx) => (
                                        <li key={idx} className="d-flex align-items-center">
                                            <img src={skill.icon} alt={skill.name} className="skill-icon me-2" />
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Skills;