import fs from 'fs';
import path from 'path';

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  
  // Replace uppercase tracking-widest with just tracking-wide
  content = content.replace(/ tracking-widest uppercase/g, '');
  content = content.replace(/ tracking-widest/g, '');
  content = content.replace(/ uppercase/g, '');
  
  // change font-light to font-normal for better readability
  content = content.replace(/font-light/g, 'font-medium');
  
  fs.writeFileSync(p, content);
  console.log(`Updated ${f}`);
});
