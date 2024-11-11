import React from "react";
import logo from "../images/logo.svg";
import { navBarLinks } from "../data";
import { socialMediaLinks } from "../data";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <ul className="nav-links" id="nav-links">
            {navBarLinks.map((link) => {
              return (
                <li>
                  <a href={link.href} className="nav-link" key={link.id}>
                    {" "}
                    {link.name}{" "}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialMediaLinks.map((link) => {
              return (
                <li>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={link.icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
