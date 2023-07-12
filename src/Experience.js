import React from 'react';

function Experience() {
  return (
    <div>
      <h2>Experience</h2>
      <h3>2022 CLOUD AUTOMATION ENGINEER</h3>
      <p>
        HDFC BANK LTD<br />
        We ensure smooth Onboarding of application in HDFC Landing Zone env, this includes TCO
        Calculations, Infra Deployment through Terraform, Github Integration, etc. Validation of
        Application Architecture -&gt; Traffic flow Diagrams -&gt; Network Architecture-&gt; DevOps
        Pipelines.
      </p>
      <p>
        We are currently deploying Infrastructure of a 3-Tier Project which includes m6large series
        for app server and r series for DB server for UAT. Once server configuration done we start
        implementing ASGs & LBs.
      </p>
      <h3>2021 AUTOMATING DEPLOYMENT OF REDDIT USING CI/CD</h3>
      <p>
        IIIT PUNE<br />
        For CI Component, I used a t2.micro Ubuntu server with Docker installed. <br />
        For CD, I used a t2.large Ubuntu server and installed Docker, Minikube, Kubernetes, and
        written manifest.yml for Automation.
      </p>
      <h3>AUTOMATED CODE GENERATOR</h3>
      <p>
        IIIT PUNE<br />
        The drawing of an HTML web page can be drawn on a piece of paper and the image of that page
        can be fed as input to the software. According to that drawing, our software will convert
        it to an HTML page.
      </p>
    </div>
  );
}

export default Experience;
