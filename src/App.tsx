import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import {
  profileData as initialProfileData,
  skillsData,
  educationData,
  experienceData,
  projectsData,
  achievementsData
} from './portfolioData';

export default function App() {
  const [profile, setProfile] = useState(initialProfileData);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('about');

  // Handle Theme Toggle
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (!next) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
      return next;
    });
  };

  // Update Resume PDF Link
  const handleUpdateResumeUrl = (newUrl: string) => {
    setProfile((prev) => ({ ...prev, resumePdfUrl: newUrl }));
  };

  // Scroll section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'skills', 'experience', 'projects', 'resume', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 selection:bg-pink-600 selection:text-white relative">
      {/* Sticky Header Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main>
        <Hero data={profile} />
        <About data={profile} />
        <Education items={educationData} />
        <Skills skills={skillsData} />
        <Experience items={experienceData} />
        <Projects projects={projectsData} />
        <Achievements items={achievementsData} />
        <Resume data={profile} onUpdateResumeUrl={handleUpdateResumeUrl} />
        <Contact data={profile} />
      </main>

      {/* Footer */}
      <Footer data={profile} />
    </div>
  );
}
