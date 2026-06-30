import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { scrollToSection } from '../utils/scroll';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Features', href: '#features' },
  { name: 'Booking', href: '#booking' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((window.scrollY / windowHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-cream/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex flex-col group">
          <span className="font-serif text-2xl text-brand-heading font-semibold tracking-wide group-hover:text-brand-gold transition-colors">
            Larisa Floroiu
          </span>
          <span className="text-[0.65rem] tracking-[0.2em] text-brand-muted">
            Beauty Ambassador
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-brand-charcoal font-sans font-semibold tracking-widest text-xs uppercase hover:text-brand-primary transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-brand-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => scrollToSection(e, '#booking')}
            className="px-6 py-2.5 bg-brand-brown text-white text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-brand-gold transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            className="p-2 text-brand-heading"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-surface border-b border-brand-border shadow-lg md:hidden"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    scrollToSection(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-brand-charcoal font-sans font-semibold tracking-widest text-xs uppercase hover:text-brand-primary transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-brand-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 inline-block w-max"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-brand-border">
                <a
                  href="#booking"
                  onClick={(e) => {
                    scrollToSection(e, '#booking');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-center px-6 py-3 bg-brand-brown text-white text-sm font-medium rounded-full hover:bg-brand-gold transition-all active:scale-95 duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
