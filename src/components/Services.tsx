import { useState } from 'react';
import { SERVICES } from '../data';
import { Sparkles, Check, Clock, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import verticalPowderBrows from '../assets/images/vertical_powder_brows_1782782329445.jpg';
import { scrollToSection } from '../utils/scroll';

interface ServicesProps {
  onSelectService?: (serviceId: string) => void;
  onOpenConsultationModal?: () => void;
}

export default function Services({ onSelectService, onOpenConsultationModal }: ServicesProps) {
  // Aktif kategoriyi (sekme filtrelemesi) takip eden state
  const [activeCategory, setActiveCategory] = useState<'all' | 'permanent-makeup' | 'nails' | 'consultation'>('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'permanent-makeup', name: 'Permanent Makeup' },
    { id: 'nails', name: 'Nail Art & Aesthetics' },
    { id: 'consultation', name: 'Consultation' },
  ];

  // Rezervasyon butonuna basıldığında tetiklenen fonksiyon
  const handleBookingTrigger = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    scrollToSection(null, '#booking');
  };

  // Grid/UI yerleşimini ayırmak için verileri filtreleme
  const powderBrows = SERVICES.find(s => s.id === 'powder-brows')!;
  const consultation = SERVICES.find(s => s.id === 'free-consultation')!;
  const nailServices = SERVICES.filter(s => s.category === 'nails');

  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Üst Kısım / Başlıklar */}
      <div className="text-center mb-16">
        <span className="font-sans font-bold text-xs text-brand-primary tracking-[0.4em] uppercase block mb-4">
          Exclusive Treatments
        </span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-brand-on-surface">
          Signature Services
        </h2>
        <p className="text-sm sm:text-base text-brand-on-surface-variant max-w-xl mx-auto mt-4 font-sans">
          Bespoke enhancements styled with professional clinical care in a peaceful, private salon environment.
        </p>
      </div>

      {/* Kategori Filtreleme Butonları (Pills) */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as any)}
            className={`px-6 py-2.5 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-300 border ${
              activeCategory === category.id
                ? 'bg-brand-primary text-white border-brand-primary shadow-md'
                : 'bg-white/40 text-brand-on-surface-variant border-brand-outline-variant/30 hover:bg-brand-surface-container/40'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* İçerik Animasyon Yöneticisi */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="space-y-12"
        >
          {/* Ana Öne Çıkanlar (Kalıcı Makyaj & Danışmanlık) */}
          {(activeCategory === 'all' || activeCategory === 'permanent-makeup' || activeCategory === 'consultation') && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Premium Büyük Kart: Powder Brows */}
              {(activeCategory === 'all' || activeCategory === 'permanent-makeup') && (
                <div className={`glass-card rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-all duration-300 border-none ${
                  activeCategory === 'permanent-makeup' ? 'lg:col-span-12 max-w-5xl mx-auto w-full' : 'lg:col-span-8'
                }`}>
                  <div className="md:w-1/2 aspect-square md:aspect-auto relative min-h-[300px]">
                    <img 
                      className="w-full h-full object-cover" 
                      src={verticalPowderBrows} 
                      alt="Signature Powder Brows"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 text-brand-primary font-sans font-bold text-[10px] tracking-widest uppercase px-4 py-2 rounded-full backdrop-blur-md shadow-sm">
                      Featured Treatment
                    </div>
                  </div>
                  
                  <div className="p-8 sm:p-10 md:w-1/2 flex flex-col justify-between bg-white/45">
                    <div>
                      <div className="mb-6 border-b border-brand-primary/10 pb-6">
                        <h4 className="font-display text-2xl sm:text-3xl text-brand-on-surface font-semibold leading-tight">
                          {powderBrows.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-brand-on-surface-variant leading-relaxed mb-6 font-sans">
                        {powderBrows.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-brand-on-surface-variant/80 font-sans text-xs mb-6">
                        <Clock className="w-4 h-4 text-brand-primary" />
                        <span>Duration: {powderBrows.duration}</span>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {powderBrows.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-on-surface-variant font-sans font-medium">
                            <Check className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-end border-b border-brand-primary/10 pb-4">
                           <span className="text-[10px] font-sans font-bold text-brand-primary/70 uppercase tracking-[0.1em]">Price</span>
                           <span className="font-display font-medium text-2xl text-brand-primary">{powderBrows.price}</span>
                        </div>
                        <button
                          onClick={() => handleBookingTrigger('powder-brows')}
                          className="w-full blush-glow text-white py-4 rounded-full font-sans font-semibold text-xs tracking-widest uppercase text-center hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
                        >
                          Book Powder Brows
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sağ Taraf: Danışmanlık Kartı */}
              {(activeCategory === 'all' || activeCategory === 'consultation') && (
                <div className={`rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between border border-brand-primary/10 transition-all duration-300 shadow-sm hover:shadow-lg ${
                  activeCategory === 'consultation' ? 'lg:col-span-12 max-w-xl mx-auto w-full bg-brand-surface-container-low' : 'lg:col-span-4 bg-brand-surface-container-low'
                }`}>
                  <div>
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-primary mb-6 shadow-sm border border-brand-primary/5">
                      <Heart className="w-6 h-6" />
                    </div>
                    <h4 className="font-display text-2xl text-brand-on-surface font-semibold mb-3">
                      {consultation.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-on-surface-variant leading-relaxed mb-6 font-sans opacity-90">
                      {consultation.description}
                    </p>
                    
                    <div className="bg-white/60 py-2.5 px-4 rounded-xl inline-flex items-center gap-2 mb-8 border border-brand-primary/5">
                      <Clock className="w-4 h-4 text-brand-primary" />
                      <span className="font-sans font-bold text-xs uppercase tracking-widest text-brand-primary">
                        15 Minutes — FREE
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {consultation.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-on-surface-variant font-sans">
                          <Check className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => handleBookingTrigger('free-consultation')}
                      className="w-full bg-brand-primary text-white py-4 rounded-full font-sans font-semibold text-xs tracking-widest uppercase text-center hover:bg-brand-primary/90 transition-colors duration-300 shadow-sm"
                    >
                      Schedule Consultation
                    </button>
                    <button
                      onClick={onOpenConsultationModal}
                      className="w-full border border-brand-primary/20 text-brand-primary py-3 rounded-full font-sans font-semibold text-xs tracking-widest uppercase text-center hover:bg-white/30 transition-colors duration-300"
                    >
                      Instant Self-Assessment
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Alt Kısım: Tırnak Bakımı (Nails) Hizmet Kartları Grid'i */}
          {(activeCategory === 'all' || activeCategory === 'nails') && (
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-4 ${
              activeCategory === 'nails' ? 'max-w-5xl mx-auto' : ''
            }`}>
              {nailServices.map((service) => (
                <div
                  key={service.id}
                  className="glass-card p-8 sm:p-10 rounded-[2.5rem] flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 border-none bg-white/40"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-brand-primary-container/30 flex items-center justify-center text-brand-primary mb-6 transition-transform duration-500 group-hover:scale-110">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    
                    <div className="flex justify-between items-baseline mb-4">
                      <h5 className="font-display text-xl sm:text-2xl font-semibold text-brand-on-surface">
                        {service.title}
                      </h5>
                      <span className="text-[10px] font-sans font-bold text-brand-primary/70 uppercase tracking-wider bg-brand-primary-container/20 px-2.5 py-1 rounded-full shrink-0">
                        Nails
                      </span>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-brand-on-surface-variant/80 font-sans leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-brand-on-surface-variant/70 font-sans text-xs mb-6">
                      <Clock className="w-4 h-4 text-brand-primary" />
                      <span>{service.duration}</span>
                    </div>

                    <ul className="space-y-2.5 mb-8 border-t border-brand-primary/5 pt-4">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-brand-on-surface-variant/80 font-sans">
                          <Check className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-end border-b border-brand-primary/10 pb-4">
                         <span className="text-[10px] font-sans font-bold text-brand-primary/70 uppercase tracking-[0.1em]">Price</span>
                         <span className="font-display font-medium text-2xl text-brand-primary">{service.price}</span>
                      </div>
                      <button
                        onClick={() => handleBookingTrigger(service.id)}
                        className="w-full bg-transparent border border-brand-primary text-brand-primary py-3.5 rounded-full font-sans font-bold text-[10px] tracking-widest uppercase hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-sm"
                      >
                        Book Treatment
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </motion.div>
      </AnimatePresence>
    </section>
  );
}
