/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RevealOnScroll from './components/RevealOnScroll';
import WhatsAppFAB from './components/WhatsAppFAB';
import InstagramFeed from './components/InstagramFeed';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal font-sans">
      <Navbar />
      <main>
        <Hero />
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
        <RevealOnScroll>
          <Services />
        </RevealOnScroll>
        <RevealOnScroll>
          <Gallery />
        </RevealOnScroll>
        <RevealOnScroll>
          <Features />
        </RevealOnScroll>
        <RevealOnScroll>
          <Testimonials />
        </RevealOnScroll>
        <RevealOnScroll>
          <Booking />
        </RevealOnScroll>
        <RevealOnScroll>
          <FAQ />
        </RevealOnScroll>
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
        <RevealOnScroll>
          <InstagramFeed />
        </RevealOnScroll>
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

