import { Service } from './types';

// data.ts (Sahte Veritabanı)
export const SERVICES: Service[] = [
  {
    id: 'powder-brows',
    title: 'Signature Powder Brows',
    category: 'permanent-makeup',
    price: '€450',
    duration: '2.5 - 3 Hours',
    description: 'A semi-permanent makeup technique designed to create eyebrows with soft powder effect, very similar to powder makeup. Ideal for all skin types.',
    features: [
      'Custom color matching and pigment blending',
      'Pain-free process with premium topical anesthetics',
      'Lasts 1-3 years depending on skin type',
      'Complimentary 6-week touch-up included'
    ]
  },
  {
    id: 'gel-manicure',
    title: 'Russian Gel Manicure',
    category: 'nails',
    price: '€65',
    duration: '1.5 Hours',
    description: 'An immaculate e-file manicure focusing on deep cuticle cleaning and precise gel application for long-lasting perfection.',
    features: [
      'Dry e-file cuticle care',
      'Structured builder gel overlay',
      'Flawless color application close to cuticle',
      'Lasts 3-4+ weeks without chipping'
    ]
  },
  {
    id: 'nail-art',
    title: 'Custom Nail Artistry',
    category: 'nails',
    price: '€85+',
    duration: '2 Hours',
    description: 'Bespoke hand-painted designs, 3D elements, and complex aesthetic arrangements layered over a structured gel base.',
    features: [
      'Hand-painted intricate details',
      'Chrome, glazed, or velvet finishes',
      '3D textures and encapsulated art',
      'Consultation on design aesthetics'
    ]
  },
  {
    id: 'free-consultation',
    title: 'Initial Consultation',
    category: 'consultation',
    price: 'Free',
    duration: '15 Minutes',
    description: 'Unsure which treatment is right for you? Book a complimentary consultation to discuss your aesthetic goals.',
    features: [
      'Skin type and suitability assessment',
      'Shape and color mapping preview',
      'Allergy and medical history review',
      'No obligation to book a treatment'
    ]
  }
];
