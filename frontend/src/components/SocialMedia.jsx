import React from 'react';
import {
  // BsTwitter,
  // BsInstagram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

import { MdEmail } from "react-icons/md";

const SocialMedia = () => {
  return (
    <div className="app__social">

      <div>
        <a
          href="mailto:sangampshinde@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <MdEmail />
        </a>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/sangamshinde/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>

      <div>
        <a
          href="https://github.com/sangampshinde"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>

    </div>
  );
};

export default SocialMedia;