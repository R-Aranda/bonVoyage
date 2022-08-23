import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faGithub, faLinkedin);

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="cell">
          <div>
            Created By <strong>Rupert Aranda</strong>
          </div>
        </div>
        <div className=" cell">
          <a
            href="https://github.com/R-Aranda"
            target="_blank"
            className="footer-icon"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/rupert-aranda/"
            target="_blank"
            className="footer-icon"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
