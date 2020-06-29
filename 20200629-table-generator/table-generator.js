const axios = require('axios');
const cheerio = require('cheerio');
const sanitizeHtml = require('sanitize-html');

const { log: print } = console;

const SHEET_ID = '2PACX-1vRiYttiD021c-nfxCdxLE_tDNDG16e9foFyisqyrRSb-rKZd13VfL6y9eePWtV6IdD_Zi5o1fecmWz9';

const TABLES = [
  {
    name: 'project',
    gid: '0',
  },
  {
    name: 'people',
    gid: '252072184',
  },
];

function htmlUrl(gid) {
  return `https://docs.google.com/spreadsheets/d/e/${SHEET_ID}/pubhtml?gid=${gid}&single=true`;
}

async function fetchHTML(url) {
  const { data } = await axios.get(url);

  return await cheerio.load(data, { decodeEntities: true });
}

async function fetchTables(table) {
  const { name, gid } = table;

  const sheetHTML= await fetchHTML(htmlUrl(gid));

  const tableHTML = await sanitizeHtml(sheetHTML('table').html());

  return {
    name,
    html: tableHTML,
  };
}

async function main() {
  const sheets = await Promise.all(
    TABLES.map(fetchTables),
  );

  const tables = sheets.reduce((acc, table) => ({
    ...acc,
    [table.name]: table.html,
  }), {});

  await print(JSON.stringify(tables, null, '  '));
}

main();
