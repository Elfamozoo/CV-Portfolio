import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/illyes-zerga/"
        >
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" href="https://github.com/Elfamozoo">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
