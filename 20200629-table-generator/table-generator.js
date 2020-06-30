const fs = require('fs');
const { promisify } = require('util');

const axios = require('axios');
const sanitizeHtml = require('sanitize-html');
const { parse } = require('node-html-parser');
const pretty = require('pretty');

const { log: print } = console;

const DOCUMENT_ID = '2PACX-1vRiYttiD021c-nfxCdxLE_tDNDG16e9foFyisqyrRSb-rKZd13VfL6y9eePWtV6IdD_Zi5o1fecmWz9';
const DOCUMENT_URL = `https://docs.google.com/spreadsheets/d/e/${DOCUMENT_ID}/pubhtml`;

const tables = [
  {
    name: 'project',
    sheetId: '0',
  },
  {
    name: 'people',
    sheetId: '252072184',
  },
];

function cleanTable(table) {
  table.removeChild(table.querySelector('thread'));

  table.querySelectorAll('th').forEach((element) => {
    element.parentNode.removeChild(element);
  });
}

async function loadTable(sheetId) {
  const url = `${DOCUMENT_URL}?gid=${sheetId}&single=true`;

  const { data } = await axios.get(url);

  const root = parse(sanitizeHtml(data));
  const table = root.querySelector('table');

  cleanTable(table);

  return pretty(table.outerHTML) + '\n';
}

async function main() {
  await Promise.all(
    tables.map(async ({ name, sheetId }) => {
      const html = await loadTable(sheetId);
      await promisify(fs.writeFile)(`data/${name}.html`, html);
    }),
  );

  print('Complete!');
}

main();


