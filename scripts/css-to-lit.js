// @ts-check

import { readFileSync, writeFileSync } from 'node:fs';

const cssFilePath = process.argv[2];

if (!cssFilePath) {
  throw new Error('Usage: node scripts/css-to-lit.js <cssFilePath> [tsFilePath]');
}

const tsFilePath = process.argv[3] || cssFilePath.replace('.css', '-styles.ts');

const cssFileData = readFileSync(cssFilePath, 'utf8').replace(/\/\*#\ sourceMappingURL=[^\*]+ \*\/\n/, '');

let tsFileData = 'import { css } from "lit";\n';

tsFileData += `export const styles = css\`${cssFileData}\``;

writeFileSync(tsFilePath, tsFileData);
