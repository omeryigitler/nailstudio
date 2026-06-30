import fs from 'fs';
import path from 'path';

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  
  // Replace text-brand-brown with text-brand-heading
  content = content.replace(/text-brand-brown/g, 'text-brand-heading');
  
  // Replace bg-white with bg-brand-surface (except bg-white\/X like bg-white/10)
  // Wait, let's just do a specific regex:
  // We want to replace bg-white when it's not followed by a slash.
  content = content.replace(/bg-white(?!\/)/g, 'bg-brand-surface');

  // Same for text-white? Actually text-white is usually on brand-brown (buttons, footer), 
  // so keeping it white is mostly fine. 
  // But wait! In dark mode, if the card is bg-brand-surface, we might need text-brand-charcoal, 
  // which is already there by default.
  
  fs.writeFileSync(p, content);
  console.log(`Updated ${f}`);
});
