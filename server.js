/* =========================================================================
 * 천자문 어드벤처 — 로컬 정적 서버 (의존성 없음)
 * 실행:  node server.js           (기본 포트 5000)
 *        node server.js 8080      (포트 지정)
 * 종료:  터미널에서 Ctrl + C
 * ======================================================================= */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.argv[2]) || 5000;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  // 쿼리 제거 + URL 디코드
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';

  // 디렉터리 탈출 방지
  const filePath = path.join(ROOT, path.normalize(urlPath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('403 Forbidden');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end('<h1>404 Not Found</h1>');
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n  🀄  천자문 어드벤처 서버 실행 중`);
  console.log(`  ➜  http://localhost:${PORT}\n`);
  console.log(`  (종료하려면 Ctrl + C)\n`);
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.error(`\n  ⚠️  포트 ${PORT} 이(가) 이미 사용 중입니다. 다른 포트로 실행하세요: node server.js 5050\n`);
  } else {
    console.error(e);
  }
  process.exit(1);
});
