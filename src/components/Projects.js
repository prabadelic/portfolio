import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Restaurant Reservation System",
      description: "Full-stack app to manage reservations and table assignments.",
      techStack: "Full Stack: React, React Router, JS, HTML/CSS, Node.js, Express, PostgreSQL, Knex",
      demo: "https://restaurant-reservation-capstone-1.onrender.com/",
      github: "https://github.com/prabadelic/Restaurant-Reservation-Capstone",
      image: "/photos/restaurant-reservation.png",
    },
    {
      title: "WeLoveMovies",
      description: "Movie theater management app.",
      techStack: "Backend: Node.js, Express, RESTful APIs, PostgreSQL, Knex",
      demo: "https://welovemovies-frontend-8wb2.onrender.com/", 
      github: "https://github.com/prabadelic/WeLoveMovies",
      image: "/photos/welovemovies.png",
    },
    {
      title: "GrubDash",
      description: "Food delivery e-commerce app.",
      techStack: "Backend: Node.js, Express, RESTful APIs, PostgreSQL, Knex",
      demo: "#", 
      github: "https://github.com/prabadelic/GrubDash",
      image: "/photos/grubdash.png",
    },
    {
      title: "Flashcard-o-Matic",
      description: "Flashcard study app for learners.",
      techStack: "Frontend: React, React Router, JS, HTML/CSS",
      github: "https://github.com/prabadelic/flashcard-o-matic-capstone",
      image: "/photos/flash-card.png",
    },
    {
      title: "Recipe App",
      description: "Recipe App built to manage and organize recipes.",
      techStack: "Frontend: React, JS, HTML/CSS",
      demo: "https://recipe-app-livid-xi.vercel.app/", 
      github: "https://github.com/prabadelic/my-react-project-recipe-app",
      image: "/photos/recipe.png",
    },
    {
      title: "Thinkfulbnb",
      description: "Frontend implementation for a rental service.",
      techStack: "Frontend: JS, HTML/CSS",
      demo: "https://prabadelic.github.io/starter-thinkfulbnb-main/",
      github: "https://github.com/prabadelic/starter-thinkfulbnb-main",
      image: "/photos/thinkfulbnb.jpg",
    },
  ];

  return (
    <section id="projects" className="py-1 bg-dark text-white">
      <div className="container">
        <h2 className="text-center text-uppercase mb-4" style={{ color: "#8AB4F8" }}>
          Projects
        </h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 bg-dark text-white border border-secondary">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    height: "200px",
                    objectFit: "scale-down",
                    borderBottom: "1px solid #8AB4F8",
                  }}
                />
                <div className="card-body">
                  <p style={{ color: 'rgb(255, 255, 255)' }}>
                    <b>{project.title}</b>
                  </p>
                  <p className="card-text" style={{ color: 'rgb(255, 255, 255)' }}>
                    {project.description}
                  </p>
                  <p className="card-text mini-text" style={{ color: 'rgb(255, 255, 255)' }}>
                    <i>
                      <u>{project.techStack}</u>
                    </i>
                  </p>
                  </div>
                <div className="card-footer d-flex justify-content-between">
                  <a
                    href={project.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className="btn btn-outline-light"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ borderColor: "#8AB4F8" }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
