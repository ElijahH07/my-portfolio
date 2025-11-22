"use client"

import { useState, useEffect } from "react";
import TypingText from '@/components/animata/text/typing-text';
import EmblaCarousel from '@/components/carousel/EmblaCarousel';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import ExternalLinkButton from "@/components/animata/buttons/external-link-button";
import IconButton from "@/components/animata/buttons/icon-button";
import { BrowserView, MobileView } from "react-device-detect";
import Footer from "@/components/footer/footer"

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
      {/* Name Section */}
      <div className={`relative flex min-h-screen items-center justify-center overflow-hidden transition-opacity duration-1000 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>

        {/* nav section */}
        <BrowserView>
          <nav className="nav-bar font-switzer-reg">
              <a href="/">Home</a>
              <span className="separator">|</span>
              <a href="/projects">Projects</a>
          </nav>
        </BrowserView>

        <MobileView>
          {/* Need to think of a solution here */}
        </MobileView>

        {/* Buttons in top right */}
        <div className="font-switzer-reg fixed top-6 right-6 z-50 flex items-center gap-3">
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
          <BrowserView>
            <h1 className="text-6xl md:text-8xl font-switzer-black text-white">
              Elijah Hargreaves
            </h1>
          </BrowserView>
          <MobileView>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-switzer-black text-white text-center leading-tight">
              Elijah<br />Hargreaves <br />
            </h1>
          </MobileView>
          <TypingText 
            text="Computer Engineer @ UCSB" 
            className="text-2xl md:text-3xl font-switzer-reg bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-blue-300 to-blue-300"
            grow={true}
            repeat={false}
            hideCursorOnComplete={true}
          />
        </div>

        {/* Bouncing Arrow */}
        <BrowserView>
          <button
            onClick={scrollToNextSection}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-10 h-10 text-white font-bold stroke-[3]" />
          </button>
        </BrowserView>
        <MobileView>
          <button
            onClick={scrollToNextSection}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-10 h-10 text-white font-bold stroke-[3]" />
          </button>
        </MobileView>
      </div>

      {/* Next Section */}
      <div 
        id="next-section"
        className={`min-h-screen bg-black flex items-center justify-center w-full transition-opacity duration-1000 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative z-10 mx-auto  px-6">
          <h2 className="text-4xl font-switzer-black text-white mb-4 mt-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mb-8"></div>
          <p className="text-xl text-gray-300 font-switzer-reg leading-relaxed ">
            Hello. I'm <span className="text-white font-switzer-black">Elijah</span>. I like eating waffles. But not the normal
             kind with syrup. I like waffles with brown sugar and butter. I also 
             like them with peanut butter, honey, and bananas. I think you can 
             learn a lot from someone from how they eat their waffles. If they 
             eat their waffles with nothing on it, they’re probably a serial killer 
             and you should run. If they eat their waffles with syrup, they are 
             probably boring to talk to. If they eat their waffles with syrup 
             and butter they’re like a decent person I guess. But if they eat 
             waffles like how I eat waffles, they’re obviously super cool.  <br /> <br />
             Feel free to reach out to me at ehargreaves@ucsb.edu.
          </p>

          <div className="section-divider my-16"></div>

          <h2 className="text-4xl font-switzer-black ">
            <span className="text-white ">
              My Skills
            </span>
          </h2>

          <EmblaCarousel options={{loop: true}}>
          </EmblaCarousel>

          <Footer onAboutClick={scrollToNextSection}></Footer>
        </div>
      </div>
    </>
  );
}