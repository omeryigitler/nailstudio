import React from 'react';
import { Sparkles, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  // Projede kullanılan görseller
  const ABOUT_IMAGES = {
    brows: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNUadYJ3rXSxHvEhf-TUB7UXEWvDol_9MRNSNJAJK3Q4oCzX7HG4Uy09soEzYxp7IGd3gO9gstL51VFhf_Ka0RzffSmGHN48cQfft3dF6hHpt2097YuKL6wu8-BAlKZ7i-p01UutksLyqxWd_tcWRI5d59Y8AnAoryG99t1WcDlug4A5l2gPucg6O66aRK8Yk8-5I-_WfJvzPAgimOEKKBEDLXu2BuHJ04H48v8CBaYb6BWDkb_ePxYw-iuCD1qE4fsB5wFVk1Ig',
    nails: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFNHa-2tlvijRzDO-GJLxUBKy29baM7N6sqComtlhgbzcxgcnXwlRyLVyqVDS9ZsPcVkB5pMoqIRF8tz0xxysXJ_k-_9rTUKvWo9H8gximKHTIpWp87SwjLgUgMFszTj4J3YRj4AsTEuQmI2khPzjoElruf34FBvzsJZurlLqhP8c2vhgjrM7Ex1dJoDaQ9HgJXVosFIWCVVZl4VLUA3D7Nv7Nq_FSlgp3z9YMQwkrAJE2tFrmQ_X2PjZD677tSjc9zg4hP1V0_A'
  };

  return (
    <section id="about" className="bg-brand-surface-container-low py-20 md:py-28 px-6 md:px-16 relative overflow-hidden">
      {/* Dekoratif arka plan SVG vektörü */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg className="h-full w-full fill-brand-primary" viewBox="0 0 100 100">
          <path d="M50 0 C70 0 100 30 100 50 C100 70 70 100 50 100 C30 100 0 70 0 50 C0 30 30 0 50 0" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Sol Kolon: Asimetrik Yaratıcı Portre Görselleri */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            <motion.div 
              className="aspect-[3/4] rounded-full overflow-hidden shadow-xl mt-12 transform -rotate-3 hover:rotate-2 transition-transform duration-500 border-4 border-white/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                className="w-full h-full object-cover" 
                src={ABOUT_IMAGES.brows} 
                alt="Powder brows close-up details"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              className="aspect-[3/4] rounded-full overflow-hidden shadow-2xl transform rotate-3 hover:rotate-8 transition-transform duration-500 border-4 border-white/50"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                className="w-full h-full object-cover" 
                src={ABOUT_IMAGES.nails} 
                alt="Luxury manicure process setup"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Sağ Kolon: Hikaye ve Özellikler */}
          <motion.div 
            className="lg:col-span-6 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans font-bold text-xs text-brand-primary tracking-[0.4em] uppercase block">
              Meet the Artist
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-brand-on-surface">
              Larisa Floroiu: <br />
              Your <span className="italic text-brand-primary font-normal">Beauty Ambassador</span>
            </h2>
            
            <p className="text-sm sm:text-base text-brand-on-surface-variant leading-relaxed font-sans">
              Originally from Romania and now bringing professional artistry to the prestigious Pendergardens development in St. Julian's, Malta. My philosophy is centered around highlighting your organic symmetry with subtle, advanced techniques that enhance confidence.
            </p>

            <p className="text-sm sm:text-base text-brand-on-surface-variant/90 leading-relaxed font-sans">
              I believe permanent aesthetics shouldn't look heavy or synthetic. Instead, we use micro-precision shading to achieve natural, misted finishes that complement your skin tone and naturally fade with grace.
            </p>

            {/* İkonlu Özellik Listesi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 pt-6 border-t border-brand-primary/10">
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 bg-brand-primary-container/30 rounded-full flex items-center justify-center text-brand-primary">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg sm:text-xl font-medium text-brand-on-surface">
                  Precision Artistry
                </h4>
                <p className="text-xs sm:text-sm text-brand-on-surface-variant/80 font-sans leading-relaxed">
                  Every micro-shading stroke is positioned with precision, aligning to perfect facial metric guidelines and facial dimensions.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 bg-brand-primary-container/30 rounded-full flex items-center justify-center text-brand-primary">
                  <Leaf className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg sm:text-xl font-medium text-brand-on-surface">
                  Natural Healed Look
                </h4>
                <p className="text-xs sm:text-sm text-brand-on-surface-variant/80 font-sans leading-relaxed">
                  We specialize in soft borders and custom gradients that heal like standard powder cosmetics, never looking flat.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
