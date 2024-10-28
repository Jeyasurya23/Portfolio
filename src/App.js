import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import darkVideo from './components/assets/dark.mp4';
import lightVideo from './components/assets/bluelight.mp4';
import './App.css';

const App = () => {
    const [theme, setTheme] = useState('dark');
    const isDarkTheme = theme === 'dark';

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <Router>
            <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
                <div className="video-background">
                    <video
                        className="background-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        key={theme}
                    >
                        <source src={isDarkTheme ? darkVideo : lightVideo} type="video/mp4" />
                    </video>
                </div>
                <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
                <main style={{ paddingTop: "80px" }}> {/* Add padding to avoid content hiding under the navbar */}
                    <div style={{ paddingTop: "35px" }}id="about"><About /></div>
                    <div style={{ paddingTop: "50px" }} id="skills"><Skills /></div>
                    <div style={{ paddingTop: "50px" }} id="projects"><Projects /></div>
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
