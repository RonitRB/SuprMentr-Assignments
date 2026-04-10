import React from "react";

function Projects() {
  const projects = [
    "Assistive Tech for Visually Impaired Students",
    "AI-Enhanced Financial Advisor",
    "Weather Dashboard",
  ];

  return (
    <section className="content-card">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
