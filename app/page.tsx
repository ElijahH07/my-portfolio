"use client"

import { useState, useEffect } from "react";
import TypingText from '@/components/animata/text/typing-text';
import BlurryBlob from "@/components/animata/background/blurry-blob";
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import ExternalLinkButton from "@/components/animata/buttons/external-link-button";
import IconButton from "@/components/animata/buttons/icon-button";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero Section */}
      <div 
        className={`relative flex min-h-screen items-center justify-center font-sans overflow-hidden transition-opacity duration-1000 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Buttons in top right */}
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
          <IconButton 
            icon={<Github size={24} />}
            href="https://github.com/ElijahH07"
            label="GitHub Profile"
          />
          <IconButton 
            icon={<Linkedin size={24} />}
            href="https://linkedin.com/in/elijahchargreaves"
            label="LinkedIn Profile"
          />
          <ExternalLinkButton 
            text="Resume" 
            href="https://flowcv.com/resume/k9rrshmuvuso"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white">
            Elijah Hargreaves
          </h1>
          <TypingText 
            text="Computer Engineer @ UCSB" 
            className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-blue-300 to-blue-300"
            grow={true}
            repeat={false}
            hideCursorOnComplete={true}
          />
        </div>

        {/* Bouncing Arrow */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-10 h-10 text-white font-bold stroke-[3]" />
        </button>
      </div>

      {/* Next Section */}
      <div 
        id="next-section"
        className={`min-h-screen bg-black flex items-center justify-center transition-opacity duration-1000 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-white mb-8">About Me</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            I am a freshman at UC Santa Barbara pursuing a degree in Computer Engineering 
            and possibly a minor in Physics. I have a strong interest in computer systems 
            technology, particularly in the design of operating systems and low level machine
             code to help speed up computation in modern devices. I love programming and have 
             personal experience designing full stack multi-platform apps.
          </p>
          <h2 className="text-5xl font-bold text-white mb-8 absolute -bottom-40" >Webpage still under construction</h2>
        </div>
      </div>
    </>
  );
}