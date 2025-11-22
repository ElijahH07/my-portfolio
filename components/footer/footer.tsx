'use client';

import React from 'react';
import { useEffect } from 'react';
import { Github, Mail, Linkedin, Instagram, Heart } from 'lucide-react';

interface FooterProps {
  onAboutClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAboutClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-switzer-black text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:ehargreaves@ucsb.edu"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-switzer-reg">ehargreaves@ucsb.edu</span>
              </a>
              <a 
                href="https://linkedin.com/in/elijahchargreaves"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-switzer-reg">LinkedIn Profile</span>
              </a>
              <a 
                href="https://instagram.com/elija_h_h"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-switzer-reg">@elija_h_h</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-switzer-black text-lg mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a onClick={onAboutClick} className="font-switzer-reg cursor-pointer block text-gray-400 hover:text-white transition-colors">
                About Me
              </a>
              <a href="/projects" className="font-switzer-reg cursor-pointer block text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a onClick={onAboutClick} className="font-switzer-reg cursor-pointer block text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
            </div>
          </div>

          {/* Source Code */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 font-switzer-black">This Website</h3>
            <a 
              href="https://github.com/ElijahH07/my-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all border border-gray-800 hover:border-gray-700 group"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <div className="text-sm font-semibold">View Source Code</div>
                <div className="text-xs text-gray-400">on GitHub</div>
              </div>
            </a>
            <p className="text-gray-500 text-sm mt-4 font-switzer-reg">
              Built with Next.js, React, and Tailwind CSS
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-switzer-reg text-gray-500 text-sm flex items-center gap-2">
              © {currentYear} Elijah Hargreaves 
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/ElijahH07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/elijahchargreaves"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:ehargreaves@ucsb.edu"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;