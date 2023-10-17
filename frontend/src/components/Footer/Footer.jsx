import React from "react";
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import {BiSolidUserRectangle} from 'react-icons/bi';
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer_section'>
        <div className='footer_subsection'>
          <span>© {currentYear} - CoastalBnB by Shuveksha Tuladhar</span>
          <a href="https://github.com/shuveksha-tuladhar" target="_blank" rel="noreferrer">
          <FaGithubSquare size={28} className="icons-footer"  />
        
            </a>
            <br/>
            <a href="https://www.linkedin.com/in/shuvekshatuladhar/" target="_blank" rel="noreferrer">
            <FaLinkedin size={28} className="icons-footer"/>
          
            </a>
            <a href="https://shuveksha-tuladhar.github.io/" target="_blank" rel="noreferrer">
            <BiSolidUserRectangle size={28} className="icons-footer"/>
            </a>
        </div>
       </div>
    </footer>
  );
}
