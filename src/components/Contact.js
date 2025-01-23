import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gchsv6k",
        "template_f6lhs5m",
        form.current,
        "2a1wDY00z7nWQ9lD7"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-dark text-white text-center py-1">
      <div className="container">
        <hr className="my-5" style={{ borderColor: "#8AB4F8" }} />
        <h2
          className="text-center text-uppercase mb-4"
          style={{ color: "#8AB4F8" }}
        >
          Contact
        </h2>
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
        <form
          ref={form}
          onSubmit={sendEmail}
          className="text-white mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-3">
            <input
              type="text"
              name="from_name"
              className="form-control"
              placeholder="Name"
              required
              style={{ borderColor: "#8AB4F8" }}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
              style={{ borderColor: "#8AB4F8" }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              required
              style={{ borderColor: "#8AB4F8" }}
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              className="form-control"
              rows="4"
              placeholder="Message"
              required
              style={{ borderColor: "#8AB4F8" }}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-outline-light"
              style={{ borderColor: "#8AB4F8" }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
