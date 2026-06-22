# 유진이의 한자교실 (hanwave)

동양 고전을 게임으로 배우는 한자 학습 서비스. 의존성 없는 바닐라 HTML/CSS/JS 정적 사이트.

## 구성
- `index.html` — 랜딩 페이지 (서비스 소개 + 고전 메뉴). 이미지 중심 히어로 + 스크롤 등장·"스르륵" 사운드 효과.
- `cheonjamun.html` — **천자문 어드벤처** 게임 (1000자, 250구, 카드 수집형 퀴즈 RPG).
- `game.js` / `data*.js` / `styles.css` / `effects.js` — 게임 로직·데이터·스타일.
- `landing.css` / `landing.js` — 랜딩 페이지 전용.
- `server.js` — 로컬 정적 서버 (의존성 없음). `node server.js` → http://localhost:5000

## 콘텐츠 메뉴
- 천자문 어드벤처 (OPEN)
- 노자 · 장자 · 맹자 · 논어 · 주역 (순차 오픈 예정)

## 로컬 실행
```bash
node server.js          # 기본 5000 포트
node server.js 8080     # 포트 지정
```

## 정적 배포
빌드 과정 없음. 저장소 루트(`index.html`)를 그대로 정적 호스팅하면 됩니다.
