import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{ 
        backgroundColor: 'var(--background)', 
        borderColor: 'var(--card-border)' 
      }} 
      className="w-full py-12 border-t mt-20 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Name and Copyright */}
        <div className="text-center md:text-left">
          <p 
            style={{ color: 'var(--text-primary)' }} 
            className="text-sm font-black transition-colors duration-300"
          >
            Sabbir Hossain
          </p>
          <p 
            style={{ color: 'var(--text-secondary)' }} 
            className="text-xs font-bold mt-1 transition-colors duration-300"
          >
            © {currentYear} All rights reserved.
          </p>
        </div>

        {/* Middle Side: Custom Social Icons */}
        <ul className="wrapper !h-auto !pt-0">
          {/* Facebook */}
          <a target="_blank" href="https://www.facebook.com/share/14ZXerZM1bz/" rel="noopener noreferrer">
            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              <FaFacebook />
            </li>
          </a>

          {/* LinkedIn */}
          <a target="_blank" href="https://www.linkedin.com/in/md-sabbir-hossain-dev" rel="noopener noreferrer">
            <li className="icon linkedin">
              <span className="tooltip">LinkedIn</span>
              <FaLinkedin />
            </li>
          </a>

          {/* GitHub */}
          <a target="_blank" href="https://github.com/sabbirhossain778" rel="noopener noreferrer">
            <li className="icon github">
              <span className="tooltip">GitHub</span>
              <FaGithub />
            </li>
          </a>
        </ul>

        {/* Right Side: Tech Credit */}
        <div 
          style={{ color: 'var(--text-secondary)' }} 
          className="flex items-center gap-2 text-xs font-bold transition-colors duration-300"
        >
          <span>Built with</span>
          <SiReact className="text-cyan-400 animate-spin text-sm" />
          <span>& Next.js</span>
        </div>

      </div>
    </footer>
  );
}

