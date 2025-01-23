import React, { useRef } from "react";

const Header = () => {
  const navBarRef = useRef(null);

  const handleNavLinkClick = () => {
    if (navBarRef.current.classList.contains("show")) {
      navBarRef.current.classList.remove("show");
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-3">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="#">
            PRABHJOT SINGH
          </a>

          {/* Toggler Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            ref={navBarRef}
          >
            <ul className="navbar-nav ms-auto text-end">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#aboutme"
                  onClick={handleNavLinkClick}
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#projects"
                  onClick={handleNavLinkClick}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
