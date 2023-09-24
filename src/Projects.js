import React from 'react';

function Projects() {
  // Define GitHub repository URLs for each project
  const projectRepos = {
    codeGenerator: 'https://github.com/Kaushikfortis/Terraform',
    ticketBooking: 'https://github.com/Kaushikfortis/Movie-ticket-booking-WebApp',
    // Add more project URLs as needed
  };

  return (
    <div>
      <h2>PROJECTS</h2>
      <div>
        <p>
          Automated Code Generator
          <br />
          JavaScript | Python | Bootstrap
        </p>
        <a
          href={projectRepos.codeGenerator}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View on GitHub
        </a>
      </div>
      <div>
        <p>
          Movie Ticket Booking WebApp
          <br />
          JavaScript | Python | PostgreSQL
        </p>
        <a
          href={projectRepos.ticketBooking}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View on GitHub
        </a>
      </div>
      {/* Add more project descriptions and buttons as needed */}
    </div>
  );
}

export default Projects;
