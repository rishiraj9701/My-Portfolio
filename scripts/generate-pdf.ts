import fs from 'fs';
import path from 'path';
import { generateResumePDF } from '../src/utils/resumeGenerator';

const doc = generateResumePDF();
const numPages = doc.getNumberOfPages();
console.log(`Generated PDF page count: ${numPages}`);

const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'resume.pdf');
const pdfArrayBuffer = doc.output('arraybuffer');
fs.writeFileSync(outputPath, Buffer.from(pdfArrayBuffer));
console.log(`Saved static PDF to ${outputPath} (size: ${fs.statSync(outputPath).size} bytes)`);

if (numPages !== 1) {
  console.error(`ERROR: Resume is ${numPages} pages, expected exactly 1 page!`);
  process.exit(1);
} else {
  console.log('SUCCESS: Resume fits perfectly on exactly 1 page.');
}
