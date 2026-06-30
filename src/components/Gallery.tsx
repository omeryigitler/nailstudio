import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import LazyImage from './LazyImage';
import BeforeAfterSlider from './BeforeAfterSlider';
import eyebrowArt from '../assets/images/eyebrow_art_1782775662697.jpg';
import pigmentBottles from '../assets/images/pigment_bottles_1782775677055.jpg';
import unnamed1 from '../assets/images/unnamed.png';
import unnamed2 from '../assets/images/unnamed (1).png';
import manicure from '../assets/images/vertical_manicure_1782782016713.jpg';
import salon from '../assets/images/vertical_salon_1782782037818.jpg';
import brows1 from '../assets/images/vertical_powder_brows_1782782104321.jpg';
import brows2 from '../assets/images/vertical_powder_brows_1782782329445.jpg';

const PLACEHOLDERS = [
  { 
    id: 1, 
    type: 'slider',
    label: 'Powder Brows Before/After', 
    category: 'Brows',
    span: 'col-span-1 md:col-span-2 row-span-2', 
    before: unnamed1,
    after: unnamed2
  },
  { id: 2, type: 'image', label: 'Powder Brows Close-up', category: 'Brows', span: 'col-span-1', src: eyebrowArt },
  { id: 3, type: 'image', label: 'Pigment Preparation', category: 'Studio', span: 'col-span-1', src: pigmentBottles },
  { id: 4, type: 'image', label: 'Manicure', category: 'Nails', span: 'col-span-1', src: manicure },
  { id: 5, type: 'image', label: 'Salon Detail', category: 'Salon', span: 'col-span-1', src: salon },
  { id: 6, type: 'image', label: 'Portrait / Brand', category: 'About', span: 'col-span-1 md:col-span-2', src: brows1 },
  { id: 7, type: 'image', label: 'Aesthetic Details', category: 'Details', span: 'col-span-1 md:col-span-2', src: brows2 },
];

export default function Gallery() {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  // Lightbox'ı açar ve arka planın kaydırılmasını (scroll) engeller
  const openLightbox = (index: number) => {
    setActiveItemIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Lightbox'ı kapatır ve scroll'u geri açar
  const closeLightbox = () => {
    setActiveItemIndex(null);
    document.body.style.overflow = 'auto';
  };

  // Bir sonraki görsele geçer
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex + 1) % PLACEHOLDERS.length);
    }
  };

  // Bir önceki görsele geçer
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex - 1 + PLACEHOLDERS.length) % PLACEHOLDERS.length);
    }
  };

  const activeItem = activeItemIndex !== null ? PLACEHOLDERS[activeItemIndex] : null;
  const activeImageSrc = activeItem ? (activeItem.type === 'slider' ? activeItem.after : activeItem.src) : '';

  return (
    <section id="gallery" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-brand-heading mb-4">Beauty Work Gallery</h2>
            <p className="text-lg text-brand-muted">
              A preview of powder brows, nail art and beauty details.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {PLACEHOLDERS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-brand-cream border border-brand-border rounded-2xl overflow-hidden group cursor-pointer ${item.span}`}
              onClick={() => openLightbox(index)}
            >
              {item.type === 'slider' ? (
                <BeforeAfterSlider beforeImage={item.before!} afterImage={item.after!} />
              ) : (
                <>
                  <LazyImage 
                    src={item.src!} 
                    alt={item.label}
                    className="group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-brand-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-20 pointer-events-none">
                    <span className="font-serif text-lg mb-2">{item.label}</span>
                    <span className="text-xs text-white/80">Click to view</span>
                  </div>
                </>
              )}
              {/* Minimal category tag */}
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-sans font-bold uppercase tracking-widest text-brand-primary border border-white/20 z-30">
                {item.category}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeItemIndex !== null && activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-brand-charcoal/90 backdrop-blur-xl z-[100] flex items-center justify-center p-4 sm:p-8"
            >
              {/* Close button (Kapatma Butonu) */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-300 focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Trigger (Geri Butonu) */}
              <button
                onClick={showPrev}
                className="absolute left-4 sm:left-8 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all duration-300 focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Central Slide content (Merkezdeki Büyük Görsel ve Yazı) */}
              <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
                <motion.img
                  key={activeItemIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={activeImageSrc}
                  alt={activeItem.label}
                  className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl border border-white/10"
                  onClick={(e) => e.stopPropagation()} // Resme tıklayınca modalın kapanmasını engeller
                  referrerPolicy="no-referrer"
                />
                <motion.p
                  key={`p-${activeItemIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.9, y: 0 }}
                  className="text-white text-center font-sans text-xs sm:text-sm mt-4 tracking-wide max-w-xl"
                >
                  {activeItem.label}
                </motion.p>
              </div>

              {/* Next Trigger (İleri Butonu) */}
              <button
                onClick={showNext}
                className="absolute right-4 sm:right-8 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all duration-300 focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
