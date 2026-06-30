import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ChevronRight } from 'lucide-react';
import LazyImage from './LazyImage';
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-heading leading-tight mb-6">
              Reveal Your <span className="italic text-brand-gold">True Beauty</span> in the Heart of Malta.
            </h1>
            
            <p className="text-lg text-brand-charcoal mb-4 font-medium">
              Premium Permanent Makeup, Powder Brows and Nail Art services at Pendergardens, St. Julian’s.
            </p>
            
            <p className="text-base text-brand-muted mb-10 max-w-lg">
              Enhancing your natural beauty with precision, care and a soft, elegant finish.
            </p>
            
            <div className="flex flex-col sm:flex-row w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <a
                href="#booking"
                onClick={(e) => scrollToSection(e, '#booking')}
                className="inline-flex items-center justify-center px-9 py-3.5 bg-brand-brown text-white text-sm font-medium rounded-full hover:bg-brand-gold transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book an Appointment
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center justify-center px-9 py-3.5 bg-transparent border-[0.5px] border-brand-brown/30 text-brand-heading text-sm font-medium rounded-full hover:border-brand-gold hover:text-brand-gold transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Free 15-Min Consultation
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6 text-sm text-brand-muted font-medium border-t border-brand-border pt-6 w-full flex-wrap gap-y-3">
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-2"></span>
                Permanent Makeup
              </span>
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-2"></span>
                Powder Brows
              </span>
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-2"></span>
                Nail Art
              </span>
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-2"></span>
                Free Consultation Available
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-lg mx-auto lg:mx-0"
          >
            <div className="aspect-[4/5] bg-brand-cream rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl relative group">
              <LazyImage 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" 
                alt="Premium Beauty Studio Malta"
                className="group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-brand-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white flex-col p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-20 pointer-events-none">
                <span className="text-xl font-serif mb-2">Hero Image Placeholder</span>
                <span className="text-sm text-white/80">Replace this area with a premium salon, portrait, or beauty treatment photo.</span>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-brown/5 rounded-full blur-2xl"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
