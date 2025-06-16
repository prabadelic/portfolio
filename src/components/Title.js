import React from "react";

const Title = () => {
  return (
    <section
      id="title"
      className="bg-dark text-white text-center py-1"
      style={{ marginTop: "70px" }}
    >
      <div className="container">
        {/* Profile Image */}
        <img
          src="public\headshot.png"
          alt="Headshot"
          className="border border-3 rounded-circle mb-4"
          style={{ width: "200px", height: "200px" }}
        />
        <h1 className="display-4">Prabhjot Singh</h1>
        <p className="lead">
          Hi, I’m a Full-Stack Software Engineer based in Baltimore.
        </p>

        {/* Social Links */}
        <div className="d-flex justify-content-center mb-4">
          <a
            href="https://linkedin.com/in/prabhjot-raj-singh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none mx-3"
          >
            <i
              className="bi bi-linkedin"
              style={{ fontSize: "2rem", color: "#8AB4F8" }}
            ></i>
          </a>
          <a
            href="https://github.com/prabadelic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none mx-3"
          >
            <i
              className="bi bi-github"
              style={{ fontSize: "2rem", color: "#8AB4F8" }}
            ></i>
          </a>
          <a
            href="mailto:prabadelic@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none mx-3"
          >
            <i
              className="bi bi-envelope"
              style={{ fontSize: "2rem", color: "#8AB4F8" }}
            ></i>
          </a>
          <a
            href="https://docs.google.com/document/d/1Mpy0lLnSupNd9wscTo8k4IH9n--yO6x6iUfTjlotdGA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none mx-3"
          >
            <i
              className="bi bi-file-text"
              style={{ fontSize: "2rem", color: "#8AB4F8" }}
            ></i>
          </a>
        </div>
        <hr className="my-5" style={{ borderColor: "#8AB4F8" }} />
      </div>
    </section>
  );
};

export default Title;
