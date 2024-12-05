import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificate from './components/Certificate';
import './App.css';

const App = () => {
    const [theme, setTheme] = useState('light');
    const isDarkTheme = theme === 'dark';

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
                <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
                <main style={{ marginTop: "60px", scrollBehavior: "smooth" }} id="main">
                    <div style={{ paddingTop: "55px" }} id="about"><About /></div>
                    <div style={{ paddingTop: "50px" }} id="skills"><Skills /></div>
                    <div style={{ paddingTop: "50px" }} id="projects"><Projects /></div>
                    <div style={{ paddingTop: "50px" }} id="certificates"><Certificate /></div>
                    <div style={{ paddingTop: "50px" }} id="blogs"><Blog /></div>
                    <div style={{ paddingTop: "50px" }} id="education"><Education /></div>
                    <div style={{ paddingTop: "50px" }} id="contact"><Contact /></div>
                </main> 
                <Footer isDarkTheme={isDarkTheme} />
            </div>           
        </Router>
    );
};

export default App;
