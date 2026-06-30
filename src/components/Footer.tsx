import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-2xl text-white font-semibold tracking-wide">
                Larisa Floroiu
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-gold mt-1">
                Beauty Ambassador
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              Permanent Make-up Artist specializing in Powder Brows and elegant beauty services in Malta.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/_beauty_ambassador_malta/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-heading transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:larisafloroiu@yahoo.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-heading transition-all" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    onClick={(e) => scrollToSection(e, `#${item.toLowerCase()}`)}
                    className="text-white/70 text-sm hover:text-brand-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="text-white/70 text-sm">Powder Brows</li>
              <li className="text-white/70 text-sm">PMU Touch Up</li>
              <li className="text-white/70 text-sm">Nail Art</li>
              <li className="text-white/70 text-sm">Manicure & Pedicure</li>
              <li className="text-white/70 text-sm">Free Consultation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-white/70 text-sm">
                <MapPin className="w-4 h-4 mr-3 shrink-0 mt-0.5 text-brand-gold" />
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Pendergardens,+St.+Julian%27s,+Malta" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  Pendergardens, St. Julian’s, Malta
                </a>
              </li>
              <li className="flex items-center text-white/70 text-sm">
                <Phone className="w-4 h-4 mr-3 shrink-0 text-brand-gold" />
                <a href="tel:+35677429593" className="hover:text-brand-gold transition-colors">+356 77429593</a>
              </li>
              <li className="flex items-center text-white/70 text-sm">
                <Mail className="w-4 h-4 mr-3 shrink-0 text-brand-gold" />
                <a href="mailto:larisafloroiu@yahoo.com" className="hover:text-brand-gold transition-colors">larisafloroiu@yahoo.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Larisa Floroiu | Beauty Ambassador. All rights reserved.
          </p>
          <p className="text-white/50 text-sm text-center md:text-right">
            Designed with elegance in Malta.
          </p>
        </div>

        <div className="pt-6 flex justify-center items-center">
          <p className="text-white/50 text-sm text-center">
            Designed & Developed by{' '}
            <a 
              href="https://omeryigitler.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-white hover:text-brand-gold transition-colors font-medium"
            >
              Ömer YİĞİTLER
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
