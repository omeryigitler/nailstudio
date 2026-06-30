import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, ChevronDown } from 'lucide-react';

export default function Contact() {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { value: 'powder-brows', label: 'Powder Brows' },
    { value: 'nails', label: 'Nail Art / Manicure / Pedicure' },
    { value: 'consultation', label: 'Free Consultation' },
    { value: 'other', label: 'Other' }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServiceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <section id="contact" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-brand-heading mb-8">Get in Touch</h2>
            <p className="text-brand-charcoal mb-10 text-lg">
              Have a question or ready to book? I would love to hear from you.
            </p>

            <div className="space-y-8 mb-12">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Pendergardens,+St.+Julian%27s,+Malta" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-start group"
              >
                <div className="w-12 h-12 bg-brand-surface rounded-full flex items-center justify-center shrink-0 shadow-sm mr-5 group-hover:bg-brand-gold transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-heading mb-1 group-hover:text-brand-gold transition-colors duration-300">Location</h3>
                  <p className="text-brand-muted group-hover:text-brand-charcoal transition-colors duration-300">Pendergardens, St. Julian’s, Malta</p>
                </div>
              </a>

              <a href="tel:+35677429593" className="flex items-start group">
                <div className="w-12 h-12 bg-brand-surface rounded-full flex items-center justify-center shrink-0 shadow-sm mr-5 group-hover:bg-brand-gold transition-colors duration-300">
                  <Phone className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-heading mb-1 group-hover:text-brand-gold transition-colors duration-300">Phone</h3>
                  <p className="text-brand-muted group-hover:text-brand-charcoal transition-colors duration-300">
                    +356 77429593
                  </p>
                </div>
              </a>

              <a href="mailto:larisafloroiu@yahoo.com" className="flex items-start group">
                <div className="w-12 h-12 bg-brand-surface rounded-full flex items-center justify-center shrink-0 shadow-sm mr-5 group-hover:bg-brand-gold transition-colors duration-300">
                  <Mail className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-heading mb-1 group-hover:text-brand-gold transition-colors duration-300">Email</h3>
                  <p className="text-brand-muted group-hover:text-brand-charcoal transition-colors duration-300">
                    larisafloroiu@yahoo.com
                  </p>
                </div>
              </a>
              
              <a 
                href="https://www.instagram.com/_beauty_ambassador_malta/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-start group"
              >
                <div className="w-12 h-12 bg-brand-surface rounded-full flex items-center justify-center shrink-0 shadow-sm mr-5 group-hover:bg-brand-gold transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-heading mb-1 group-hover:text-brand-gold transition-colors duration-300">Instagram</h3>
                  <p className="text-brand-muted group-hover:text-brand-charcoal transition-colors duration-300">
                    _beauty_ambassador_malta
                  </p>
                </div>
              </a>
            </div>

          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-surface p-8 md:p-10 rounded-2xl shadow-lg border border-brand-border/50"
          >
            <h3 className="text-2xl font-serif text-brand-heading mb-6">Send a Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-heading mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-heading mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all"
                  placeholder="Your email address"
                />
              </div>
              
              <div className="relative" ref={dropdownRef}>
                <label className="block text-sm font-medium text-brand-heading mb-2">Service Interested In</label>
                <div 
                  className={`w-full px-4 py-3 rounded-xl border bg-brand-cream/30 cursor-pointer flex justify-between items-center transition-all ${isServiceOpen ? 'border-brand-gold ring-2 ring-brand-gold/50' : 'border-brand-border hover:border-brand-gold/50'}`}
                  onClick={() => setIsServiceOpen(!isServiceOpen)}
                >
                  <span className={selectedService ? "text-brand-charcoal" : "text-brand-muted"}>
                    {selectedService ? services.find(s => s.value === selectedService)?.label : 'Select a service...'}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-brand-gold transition-transform duration-300 ${isServiceOpen ? 'rotate-180' : ''}`} />
                </div>
                
                <AnimatePresence>
                  {isServiceOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                      animate={{ opacity: 1, y: 0, scaleY: 1 }}
                      exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute z-10 w-full mt-2 bg-brand-surface border border-brand-border rounded-xl shadow-xl overflow-hidden origin-top"
                    >
                      {services.map((service) => (
                        <div 
                          key={service.value}
                          className={`px-4 py-3 cursor-pointer transition-colors ${selectedService === service.value ? 'bg-brand-brown/5 text-brand-gold font-medium' : 'text-brand-charcoal hover:bg-brand-cream'}`}
                          onClick={() => {
                            setSelectedService(service.value);
                            setIsServiceOpen(false);
                          }}
                        >
                          {service.label}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Hidden input for form submission if needed */}
                <input type="hidden" name="service" value={selectedService} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-heading mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-brand-brown text-white text-sm font-medium rounded-full hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-sm"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
