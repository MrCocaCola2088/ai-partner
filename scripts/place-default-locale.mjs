import {cpSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'out');
const esDir = join(outDir, 'es');

if (!existsSync(esDir)) {
  console.error('Static export is missing out/es. The default locale cannot be published at the site root.');
  process.exit(1);
}

for (const entry of readdirSync(esDir)) {
  cpSync(join(esDir, entry), join(outDir, entry), {recursive: true});
}

function redirectPage(target) {
  const absolute = `https://ai-partner.website${target}`;
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="refresh" content="0; url=${target}" />
  <link rel="canonical" href="${absolute}" />
  <meta name="robots" content="noindex" />
  <title>Redirigiendo… | AI Partner</title>
  <script>location.replace(${JSON.stringify(target)})</script>
</head>
<body>
  <p><a href="${target}">Continuar</a></p>
</body>
</html>
`;
}

function writeRedirect(dir, target) {
  mkdirSync(dir, {recursive: true});
  writeFileSync(join(dir, 'index.html'), redirectPage(target));
}

writeRedirect(join(outDir, 'pricing'), '/precios/');
writeRedirect(join(outDir, 'es', 'pricing'), '/precios/');
writeRedirect(join(outDir, 'en', 'pricing'), '/en/precios/');

const home = readFileSync(join(outDir, 'index.html'), 'utf8');
if (!home.includes('Tu negocio atendiendo por WhatsApp las 24 horas')) {
  console.error('out/index.html is not the Spanish homepage.');
  process.exit(1);
}

const precios = readFileSync(join(outDir, 'precios', 'index.html'), 'utf8');
if (!precios.includes('Básico') || !precios.includes('Crecimiento') || !precios.includes('>250<') || !precios.includes('>900<')) {
  console.error('out/precios/index.html is missing the subscription prices.');
  process.exit(1);
}

for (const relative of ['404.html', 'CNAME', '.nojekyll', join('en', 'index.html'), join('es', 'index.html')]) {
  if (!existsSync(join(outDir, relative))) {
    console.error(`Static export is missing out/${relative}.`);
    process.exit(1);
  }
}

console.log('Published the Spanish pages at the site root and kept /es and /en.');
