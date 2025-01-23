import React from "react";

const About = () => {
  return (
    <section id="aboutme" className="bg-dark text-white">
      <div className="container">
        <h2
          className="text-center text-uppercase mb-4"
          style={{ color: "#8AB4F8" }}
        >
          About Me
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <p className="lead">
              Full-stack software engineer passionate about building efficient,
              scalable, and user-friendly applications. With expertise in React,
              Node.js, and PostgreSQL, I have developed and deployed projects
              ranging from movie review applications to encryption tools.
            </p>
            <p className="lead">
              My diverse background in software engineering and retail
              management showcases my adaptability, leadership skills, and
              commitment to delivering impactful results. Feel free to check out
              my GitHub for project highlights or connect with me to discuss
              opportunities.
            </p>
            <div className="d-flex justify-content-center gap-5 mt-4">
              <a
                href="https://github.com/prabadelic"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://docs.google.com/document/d/1Mpy0lLnSupNd9wscTo8k4IH9n--yO6x6iUfTjlotdGA/edit?usp=sharing"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <hr className="my-5" style={{ borderColor: "#8AB4F8" }} />
        <div>
          <h4
            className="text-center text-uppercase mb-3"
            style={{ color: "#8AB4F8" }}
          >
            Skills & Tools
          </h4>
          <div className="row text-center">
            <div className="col-md-4">
              <h5>Frontend</h5>
              <p>
                JavaScript, HTML, CSS, Bootstrap, React.js, React Router, jQuery
              </p>
            </div>
            <div className="col-md-4">
              <h5>Backend</h5>
              <p>Node.js, Express, RESTful APIs, PostgreSQL</p>
            </div>
            <div className="col-md-4">
              <h5>Tools</h5>
              <p>
                Mocha, Chai, Knex, Git, GitHub, Postman, DBeaver, NPM, Visual
                Studio Code
              </p>
            </div>
            <hr className="my-5" style={{ borderColor: "#8AB4F8" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
