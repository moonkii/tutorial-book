/* eslint-disable import/no-extraneous-dependencies */

import path from 'path';
import fs from 'fs';

import { ulid } from 'ulid';

require('dotenv').config();

const { log } = console;

const watch = process.argv.includes('--watch');

const srcPath = path.resolve(__dirname, '../src');
const distPath = path.resolve(__dirname, '../dist');

const postfix = ulid();
const bundleTarget = `./bundle-${postfix}.js`;
const indexFilePath = path.resolve(__dirname, '../index.html');

if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}

fs.copyFileSync(
  path.resolve(__dirname, '../404.html'),
  path.resolve(distPath, './404.html'),
);

const html = fs.readFileSync(indexFilePath).toString();

fs.writeFileSync(
  path.resolve(distPath, './index.html'),
  html.replace(
    '</body>',
    `<script src="${bundleTarget}"></script></body>`,
  ),
);

require('esbuild').build({
  watch,
  bundle: true,
  entryPoints: [srcPath],
  inject: [path.resolve(__dirname, '../react-shim.js')],
  outfile: path.resolve(distPath, `./bundle-${postfix}.js`),
  // 환경변수 필요한 경우 사용
  // define: Object.keys(process.env)
  //   .filter((i) => i.startsWith('identifier'))
  //   .reduce((acc, key) => ({
  //     ...acc,
  //     [`process.env.${key}`]: `"${process.env[key]}"`,
  //   }), {}),
});

if (watch) {
  log('\nBuild watching...\n');
} else {
  log('\nBuild complete!\n');
}
