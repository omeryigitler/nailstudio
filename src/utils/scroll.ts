import React from 'react';

export const scrollToSection = (e: React.MouseEvent | null, href: string) => {
  if (e) {
    e.preventDefault();
  }
  
  if (!href.startsWith('#')) return;
  
  const target = document.querySelector(href);
  if (target) {
    const headerOffset = 74; // Exact height of scrolled navbar (py-4 + content)
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
