# 내 서비스 프로젝트 (10~13회)

## 처음 한 번 (10-1)

1. VS Code에서 `파일 → 폴더 열기`로 이 `10` 폴더 자체를 연다.
2. 터미널 → 새 터미널을 열고 줄 끝이 `…\10>` 인지 본다.
3. `npm install` 을 입력한다. 몇 분 걸린다. 끝나면 `node_modules` 폴더가 생긴다.
4. 설치가 도는 동안 파일 탐색기에서 `06` 폴더의 `PRD.md` · `09_development_plan.md` 와 `mockup` 폴더를 이 폴더의 `docs` 안으로 복사한다.
   `docs/00_course_rules.md` 는 처음부터 들어 있으니 06에서 가져오지 않는다.

## 실행할 때마다

1. 터미널에 `npm run dev` 를 입력한다.
2. `Ready` 가 보이면 브라우저에서 http://localhost:3000 을 연다.
3. 멈출 때는 터미널을 누르고 `Ctrl+C`.

OpenCode는 **다른 터미널**을 하나 더 열어서 켠다. 실행 중인 터미널에서는 켜지 않는다.

OpenCode 입력칸에서 `Tab` 을 누르면 Build와 Plan이 바뀐다. **plan 모드**에서 어느 파일을 어떻게 고칠지 설명을 듣고,
확인한 뒤 **build 모드**로 바꿔 「진행해」를 보낸다. plan 모드는 파일을 고치지 못한다.

## 폴더

| 위치 | 하는 일 |
|---|---|
| `app/page.js` | 화면 — 처음에는 예시 「할 일 정리」 |
| `public/screen/` | 내 목업을 화면으로 쓰기로 하면 AI가 목업을 여기에 복사한다. `app/page.js`는 이 화면을 연다 |
| `app/api/…/route.js` | API — 요청을 받아 응답한다. 예시는 `app/api/tasks` |
| `lib/db.js` | SQLite 연결과 표 만들기 |
| `data/app.db` | 저장된 기록 (처음 켜면 생긴다) |
| `docs/` | AI가 먼저 읽는 자료 — 수업 조건(`00_course_rules.md`, 처음부터 들어 있다) · PRD · 목업 원본 · 개발 계획 · API 약속표 · 테스트 기록 |
| `AGENTS.md` | OpenCode가 켤 때마다 먼저 읽는 규칙 |

`package.json` · `next.config.mjs` · `scripts/` 는 선생님이 정해 둔 파일이라 고치지 않는다.

## 제출 ZIP (12~13회)

`npm run pack` 을 입력하면 이 폴더 바깥에 `submit.zip` 이 생긴다. `node_modules` 와 `.next` 는 빠진다.
