import { readFileSync, existsSync } from 'node:fs';
const files=['index.html','assets/styles.css','assets/app.js'];
for (const file of files) if (!existsSync(file)) throw new Error(`Missing ${file}`);
const html=readFileSync('index.html','utf8');
for (const token of ['بیمارستان امام علی','appointmentForm','assets/app.js','assets/styles.css']) if(!html.includes(token)) throw new Error(`Missing token ${token}`);
const js=readFileSync('assets/app.js','utf8');
for (const token of ['departments','doctors','renderDoctors']) if(!js.includes(token)) throw new Error(`Missing JS token ${token}`);
console.log('Site validation passed');
