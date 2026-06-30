// types.ts (Tip tanımlamaları)
export interface Service {
  id: string;
  title: string;
  category: 'permanent-makeup' | 'nails' | 'consultation';
  price: string;
  duration: string;
  description: string;
  features: string[];
}
