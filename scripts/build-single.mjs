// Собирает всю игру в ОДИН файл play.html, который открывается двойным кликом
// (без сервера и без установки чего-либо). Запуск: npm run build
import { build } from 'esbuild';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));

const js = await build({
  entryPoints: [root + 'js/main.js'],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  minify: true,
  write: false,
  charset: 'utf8'
});
const script = js.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');
const css = await readFile(root + 'css/style.css', 'utf8');
let html = await readFile(root + 'index.html', 'utf8');

const before = html.length;
html = html
  .replace('<link rel="stylesheet" href="css/style.css">', () => `<style>\n${css}\n</style>`)
  .replace('<script type="module" src="js/main.js"></script>', () => `<script>\n${script}\n</script>`);
if (html.length === before || html.includes('src="js/main.js"') || html.includes('href="css/style.css"')) {
  throw new Error('Не удалось встроить CSS/JS — проверьте теги в index.html');
}

html = html.replace('<head>', '<head>\n  <!-- Автоматически собрано из index.html, css/ и js/ командой `npm run build`. Не редактируйте вручную. -->');
await writeFile(root + 'play.html', html);
console.log(`play.html собран: ${(html.length / 1024).toFixed(1)} КБ`);
