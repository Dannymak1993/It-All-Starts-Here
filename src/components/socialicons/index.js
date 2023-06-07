import React from "react";
import "./style.css";
import { FaGithub, FaFacebookF, FaLinkedin, FaInstagram} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram/>
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
