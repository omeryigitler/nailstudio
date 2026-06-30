import React from 'react';
import { motion } from 'motion/react';
import { PenTool, Heart, ShieldCheck, Gem } from 'lucide-react';

const REASONS = [
  {
    icon: <PenTool className="w-8 h-8 text-brand-gold" />,
    title: 'Personalized Shape',
    description: 'Each brow design is mapped according to your natural features.'
  },
  {
    icon: <Heart className="w-8 h-8 text-brand-gold" />,
    title: 'Soft Elegant Results',
    description: 'Focused on enhancing your beauty without an overly harsh look.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-gold" />,
    title: 'Patch Test & Consultation',
    description: 'Free 15-minute consultation available before treatment.'
  },
  {
    icon: <Gem className="w-8 h-8 text-brand-gold" />,
    title: 'Premium Experience',
    description: 'Clean, calm and professional beauty service in St. Julian’s.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-brand-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">Why Clients Choose Beauty Ambassador</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-serif mb-3">{reason.title}</h3>
              <p className="text-white/70 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
