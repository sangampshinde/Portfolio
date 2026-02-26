import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <MdEmail/>
        </div>
        <div>
            <BsLinkedin/>
        </div>
        <div>
            <BsGithub/>
        </div>
        <div>
            <BsTwitter/>
        </div>
    </div>
  )
}

export default SocialMedia