import React from 'react';
import { motion } from 'motion/react';

export default function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/35677429593"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:bg-[#20bd5a] transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 ml-0.5 mt-0.5"
      >
        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.42 1.25 4.86L2 22l5.31-1.22A9.973 9.973 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.02 18.23c-1.52 0-3.02-.4-4.34-1.15l-.31-.18-3.23.74.86-3.15-.2-.32a8.214 8.214 0 01-1.26-4.42c0-4.54 3.7-8.23 8.24-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.55-3.69 8.24-8.24 8.24zm4.51-6.16c-.25-.12-1.47-.73-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-1.17-.55-2.27-1.32-3.08-2.26-.25-.29-.39-.63-.41-.74-.03-.22.1-.34.22-.45.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.32-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.11 0 1.25.9 2.45 1.02 2.62.12.17 1.79 2.73 4.33 3.82 1.4.6 2.01.65 2.74.55.57-.08 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.3z" clipRule="evenodd" />
      </svg>
    </motion.a>
  );
}
