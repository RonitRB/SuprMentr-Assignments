import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <section className="hero-card">
      <div>
        <p className="badge">Multi-Page SPA</p>
        <h1>Welcome to My React App</h1>
        <p>
          This app is built using React Router to navigate between multiple pages
          without refreshing the browser.
        </p>

        <div className="button-group">
          <Link to="/projects" className="btn primary">View Projects</Link>
          <Link to="/contact" className="btn secondary">Contact Me</Link>
        </div>
      </div>

      <div className="hero-box">
        <h3>Key Features</h3>
        <ul>
          <li>React Router navigation</li>
          <li>Reusable components</li>
          <li>Clean multi-page structure</li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
