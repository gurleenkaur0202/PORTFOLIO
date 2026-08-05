import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, FileText, Send, User, Award, Code2, Briefcase, GraduationCap } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleTheme,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Award },
    { name: 'Resume', href: '#resume', icon: FileText },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-pink-900/30 py-3 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          id="logo-link"
          className="group flex items-center space-x-1 text-2xl font-black tracking-tighter text-white hover:text-pink-400 transition-colors"
        >
          <span>GK</span>
          <span className="text-pink-600 group-hover:scale-125 transition-transform inline-block">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-semibold transition-colors flex items-center space-x-1.5 py-1 ${
                  isActive
                    ? 'text-pink-500 border-b-2 border-pink-600'
                    : 'text-gray-400 hover:text-pink-400'
                }`}
              >
                <Icon className="w-3.5 h-3.5 opacity-80" />
                <span>{link.name}</span>
              </a>
            );
          })}

          {/* Light/Dark Theme Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label="Toggle dark and light mode"
            className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
            title={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-300 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-purple-300 hover:-rotate-12 transition-transform" />
            )}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            id="mobile-theme-toggle-btn"
            onClick={onToggleTheme}
            className="p-2 rounded text-gray-400 hover:text-white"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-purple-300" />}
          </button>

          <button
            id="mobile-menu-hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded text-white hover:bg-zinc-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-pink-900/30 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded text-xs uppercase tracking-widest font-semibold text-gray-300 hover:bg-zinc-900 hover:text-pink-400 transition-colors"
              >
                <Icon className="w-4 h-4 text-pink-500" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
