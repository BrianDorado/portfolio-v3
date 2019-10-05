import React, { Component } from 'react';

import './Projects.scss';

class Projects extends Component {
  render() {
    return (
      <div className="project-display-container">
        <ul>
          <section>
            <p>The ICON portal</p>
            <iframe
              title="ICON Portal"
              src="https://icon.nffs.org"
              className="project-display icon"
            ></iframe>
          </section>
          <section>
            <h3>Web Scraper</h3>
          </section>
          <section>
            <h3>Spotify with additional functionality</h3>
          </section>
          <section>
            <h3>C++ Game</h3>
          </section>
        </ul>
      </div>
    );
  }
}

export default Projects;
