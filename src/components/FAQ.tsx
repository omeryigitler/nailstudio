import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'What is Powder Brows?',
    answer: 'Powder Brows is a permanent makeup technique that creates a soft, shaded brow effect for a fuller and more defined look.'
  },
  {
    question: 'Is there a consultation before treatment?',
    answer: 'Yes, a free 15-minute consultation is available for a patch test, brow assessment and treatment discussion.'
  },
  {
    question: 'Where is the salon located?',
    answer: 'The service is based at Pendergardens, St. Julian’s, Malta.'
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book through the calendar section, call +356 77429593, email larisafloroiu@yahoo.com, or message on Instagram.'
  },
  {
    question: 'Are nail prices available?',
    answer: 'Nail Art, Manicure and Pedicure prices will be added soon. Please contact Larisa for details.'
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-brand-border last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-lg"
      >
        <span className="text-lg font-medium text-brand-heading pr-4">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-brand-gold transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-charcoal text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-brand-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-brand-heading mb-4">Frequently Asked Questions</h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-cream rounded-2xl p-6 sm:p-10 shadow-sm"
        >
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
