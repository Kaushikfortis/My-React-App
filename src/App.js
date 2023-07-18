import React, { useState } from 'react';
import './App.css';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

function App() {
  const githubRepoLink = 'https://github.com/Kaushikfortis';
  const certificationsLink =
    'https://www.linkedin.com/in/kaushik-pandilwar-12aa87185';

  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    if (currentPage === 'education') {
      return <Education />;
    } else if (currentPage === 'experience') {
      return <Experience />;
    } else if (currentPage === 'skills') {
      return <Skills />;
    } else {
      return (
        <>
          <section>
            <h3>About Me</h3>
            <p>
              Welcome to my website! I operate in an exciting space at the intersection
               of finance and technology development. Entrepreneurial Spirit. Relentless
                 Persuit of Innovation. Opportunities to explore new Ideas. Here
                  Extraordinary ideas come together to solve complex financial problems through
                   analytical rigor and expecptional programming skills.
                     
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
        <button className="nav-button" onClick={() => handleNavigation('home')}>
          Home
        </button>
        <button className="nav-button" onClick={() => handleNavigation('education')}>
          Education
        </button>
        <button className="nav-button" onClick={() => handleNavigation('experience')}>
          Experience
        </button>
        <button className="nav-button" onClick={() => handleNavigation('skills')}>
          Skills
        </button>
      </nav>

      <header className="App-header">
        <h1>Kaushik Pandilwar</h1>
        <h2>Cloud Engineer</h2>
      </header>

      <main className="App-main">{renderContent()}</main>

      <footer className="App-footer">
        &copy; 2023 Kaushik Pandilwar
      </footer>
    </div>
  );
}

export default App;
