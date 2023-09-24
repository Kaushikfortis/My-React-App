import React, { useState } from 'react';
import './App.css';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects'; // Import a component to display your projects
import Contact from './Contact'; // Import a component for contact information
import { animateScroll as scroll } from 'react-scroll';

function App() {
  const githubRepoLink = 'https://github.com/Kaushikfortis';
  const certificationsLink =
    'https://drive.google.com/drive/folders/1qv9a_d1xypf1WWS8Eh8EFUMWVk-JFI6-?usp=sharing';

  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
    scroll.scrollToTop();
  };

  const renderContent = () => {
    if (currentPage === 'education') {
      return <Education />;
    } else if (currentPage === 'experience') {
      return <Experience />;
    } else if (currentPage === 'skills') {
      return <Skills />;
    } else if (currentPage === 'projects') {
      return <Projects />; // Add a component to display your projects
    } else if (currentPage === 'contact') {
      return <Contact />; // Add a component with your contact information
    } else {
      return (
        <>
          <section>
            <h3>About Me</h3>
            <p>
              Welcome to my website! I am a cloud engineer with expertise in various cloud platforms.
              I specialize in designing and deploying scalable cloud infrastructure, automating
              processes, and optimizing performance.
            </p>
          </section>

          <section>
            <h3>GitHub Repository</h3>
            <p>
              Check out my projects and contributions on GitHub:
            </p>
            <a href={githubRepoLink} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </section>

          <section>
            <h3>Certifications</h3>
            <p>
              Here are my certifications:
            </p>
            <a href={certificationsLink} target="_blank" rel="noopener noreferrer">
              View Certifications
            </a>
          </section>
        </>
      );
    }
  };

  return (
    <div className="App">
      <nav className="App-nav">
        <button
          className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => handleNavigation('home')}
        >
          Home
        </button>
        <button
          className={`nav-button ${currentPage === 'education' ? 'active' : ''}`}
          onClick={() => handleNavigation('education')}
        >
          Education
        </button>
        <button
          className={`nav-button ${currentPage === 'experience' ? 'active' : ''}`}
          onClick={() => handleNavigation('experience')}
        >
          Experience
        </button>
        <button
          className={`nav-button ${currentPage === 'skills' ? 'active' : ''}`}
          onClick={() => handleNavigation('skills')}
        >
          Skills
        </button>
        <button
          className={`nav-button ${currentPage === 'projects' ? 'active' : ''}`}
          onClick={() => handleNavigation('projects')}
        >
          Projects
        </button>
        <button
          className={`nav-button ${currentPage === 'contact' ? 'active' : ''}`}
          onClick={() => handleNavigation('contact')}
        >
          Contact
        </button>
      </nav>

      <header className="App-header">
        <h1>Kaushik Pandilwar</h1>
        <h2>Cloud Engineer</h2>
      </header>

      <main className="App-main">{renderContent()}</main>

      <footer className="App-footer">
        &copy; {new Date().getFullYear()} Kaushik Pandilwar
      </footer>
    </div>
  );
}

export default App;
