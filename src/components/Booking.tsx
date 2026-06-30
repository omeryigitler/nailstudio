import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';

export default function Booking() {
  return (
    <section id="booking" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-brand-heading mb-4">Book Your Appointment</h2>
            <p className="text-lg text-brand-muted">
              Select a suitable time from the calendar below or contact Larisa directly for availability.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Calendar Embed Placeholder */}
          <div className="bg-white/50 border-2 border-dashed border-brand-border rounded-2xl min-h-[600px] flex flex-col items-center justify-center p-8 text-center mb-8 shadow-sm">
            <span className="text-2xl font-serif text-brand-heading mb-2">[Embed Calendly or TidyCal Widget Here]</span>
            <span className="text-brand-muted">You can replace this area with your Calendly, TidyCal, or booking widget embed code.</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="tel:+35677429593"
              className="flex items-center justify-center w-full sm:w-auto px-9 py-3.5 bg-brand-brown text-white text-sm font-medium rounded-full hover:bg-brand-gold transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Phone className="w-5 h-5 mr-3" />
              WhatsApp / Call: +356 77429593
            </a>
            <a
              href="mailto:larisafloroiu@yahoo.com"
              className="flex items-center justify-center w-full sm:w-auto px-9 py-3.5 bg-transparent border-[0.5px] border-brand-brown/30 text-brand-heading text-sm font-medium rounded-full hover:border-brand-gold hover:text-brand-gold transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Mail className="w-5 h-5 mr-3" />
              larisafloroiu@yahoo.com
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
