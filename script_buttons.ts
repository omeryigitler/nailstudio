import fs from 'fs';
import path from 'path';

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const primaryRegex = /px-\d+ py-\d+(?:\.\d+)? bg-brand-brown text-white(?: text-[a-z]+)? font-medium rounded-full hover:bg-brand-gold transition-all (?:hover:scale-\[\d+\.\d+\]|hover:scale-105) (?:active:scale-95 )?shadow-[a-z]+/g;
const primaryReplacement = "px-9 py-3.5 bg-brand-brown text-brand-cream text-sm font-light tracking-widest uppercase rounded-full hover:bg-brand-gold transition-all duration-300 shadow-sm hover:shadow-md";

const secondaryRegex = /px-\d+ py-\d+(?:\.\d+)? bg-brand-surface border border-brand-border text-brand-heading font-medium rounded-full hover:border-brand-gold hover:text-brand-gold transition-all (?:hover:scale-\[\d+\.\d+\]|hover:scale-105) shadow-[a-z]+/g;
const secondaryReplacement = "px-9 py-3.5 bg-transparent border-[0.5px] border-brand-brown/30 text-brand-heading text-sm font-light tracking-widest uppercase rounded-full hover:border-brand-gold hover:text-brand-gold transition-all duration-300 shadow-sm hover:shadow-md";

// Note: Navbar has slightly different buttons
const navbarBtnRegex = /px-6 py-2\.5 bg-brand-brown text-white text-sm font-medium rounded-full hover:bg-brand-gold transition-all hover:scale-105 shadow-sm/g;
const navbarBtnReplacement = "px-6 py-2.5 bg-brand-brown text-brand-cream text-xs font-light tracking-widest uppercase rounded-full hover:bg-brand-gold transition-all duration-300 shadow-sm";

const mobileNavBtnRegex = /block w-full text-center px-6 py-3 bg-brand-brown text-white text-base font-medium rounded-full hover:bg-brand-gold transition-all active:scale-95/g;
const mobileNavBtnReplacement = "block w-full text-center px-6 py-3 bg-brand-brown text-brand-cream text-sm font-light tracking-widest uppercase rounded-full hover:bg-brand-gold transition-all active:scale-95 duration-300";

files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  
  let updated = content;
  updated = updated.replace(primaryRegex, primaryReplacement);
  updated = updated.replace(secondaryRegex, secondaryReplacement);
  updated = updated.replace(navbarBtnRegex, navbarBtnReplacement);
  updated = updated.replace(mobileNavBtnRegex, mobileNavBtnReplacement);
  
  if (updated !== content) {
    fs.writeFileSync(p, updated);
    console.log(`Updated ${f}`);
  }
});
