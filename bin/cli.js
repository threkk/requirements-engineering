#!/usr/bin/env node

const { accessSync, constants, readdirSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const { exit } = require('process');

const route = join(__dirname, '../weeks');
console.log(`==> Looking for ${route}`);

const output = { weeks: [] };

try {
    accessSync(route, constants.R_OK);
} catch (err) {
    console.log(`[x] Error, not accesible: ${route}`);
    exit(1);
}

console.log(`[√] Directory found and accesible.`);
console.log('==> Reading directory.');
const files = readdirSync(route).filter((file) => file.match(/week-\d\.md/i));

console.log(`[√] Found ${files.length} valid files.`);
files.forEach((file, index) => {
    console.log(`==> Processing ${file}`);
    const buffer = readFileSync(join(route,file));
    output.weeks.push({
        menu: file.replace(/\.md/g,'').replace(/-/,' '),
        content: buffer.toString('base64')
    });
});

console.log(`[√] ${output.weeks.length} files processed.`);
console.log('==> Exporting result.');
const configFile = join(__dirname, '../config.json');
writeFileSync(configFile, JSON.stringify(output));
console.log(`[√] Done! Results written in ${configFile}`);
