import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <div className="section-divider"></div>
        <About />
        <div className="section-divider"></div>
        <Skills />
        <div className="section-divider"></div>
        <Experience />
        <div className="section-divider"></div>
        <Projects />
        <div className="section-divider"></div>
        <Contact />
      </main>
      <footer className="footer container">
        <p>&copy; {new Date().getFullYear()} Bhuvaneshwari Mohan. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
