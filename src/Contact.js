import React from 'react';

function Contact() {
    const projectRepos = {
        Instagram: 'https://www.instagram.com/fortis_fortuna_9/',
        Threads: 'https://www.threads.net/@fortis_fortuna_9',
        Github: 'https://github.com/Kaushikfortis/Movie-ticket-booking-WebApp',
        LinkedIn: 'https://www.linkedin.com/in/kaushik-pandilwar-12aa87185/'

        // Add more project URLs as needed
      };
      return (
        <div>
            <p>
              I'm Everywhere!
              </p>
            <div>
              <a
              href={projectRepos.Instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Instagram
            </a>
          </div>
          <div>
            
            <a
              href={projectRepos.Threads}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Threads
            </a>
          </div>

          <div> 
            <a
              href={projectRepos.LinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              LinkedIn
            </a>
          </div>

          <div> 
          <a
            href={projectRepos.Github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            GitHub
          </a>
        </div>

        </div>
      );
    }
    
    export default Contact;
    
