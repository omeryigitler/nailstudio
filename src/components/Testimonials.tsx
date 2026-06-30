import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: '[Client Name]',
    text: '[Replace with a real client review. Example: "Larisa is amazing and her attention to detail is unmatched. My brows look incredibly natural!"]',
    rating: 5,
  },
  {
    id: 2,
    name: '[Client Name]',
    text: '[Replace with a real client review. Example: "The studio is so relaxing and professional. Best beauty experience in St. Julian’s."]',
    rating: 5,
  },
  {
    id: 3,
    name: '[Client Name]',
    text: '[Replace with a real client review. Example: "Clean, elegant, and perfect results. I highly recommend Larisa for any PMU services."]',
    rating: 5,
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-brand-brown text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <Quote className="w-96 h-96 absolute -top-10 -left-10 text-white" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Client Love</h2>
            <p className="text-white/70">What others say about their Beauty Ambassador experience.</p>
          </motion.div>
        </div>

        <div className="relative h-64 sm:h-56">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              
              <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed mb-8 max-w-3xl">
                "{TESTIMONIALS[currentIndex].text}"
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="font-serif font-semibold text-brand-gold">
                    {TESTIMONIALS[currentIndex].name.charAt(1) !== 'l' ? TESTIMONIALS[currentIndex].name.charAt(0) : 'C'}
                  </span>
                </div>
                <span className="font-medium tracking-wide uppercase text-sm">
                  {TESTIMONIALS[currentIndex].name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-brand-gold w-6' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
