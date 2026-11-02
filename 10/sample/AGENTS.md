# 표준 프로젝트 규칙 (10~13회)

이 폴더는 중·고등학생이 AI와 함께 만드는 웹서비스 프로젝트다. 학생은 코드를 처음부터 쓰지 않고,
AI가 만든 결과를 실행하고 확인하고 고쳐 달라고 요청한다.

## 먼저 읽을 파일

- `docs/00_course_rules.md` — 수업에서 만들 수 있는 것과 어려운 것, 판정 다섯 가지
- `docs/PRD.md` — 학생의 서비스 계획서. 9-1에서 AI가 항목 아래에 붙인 `> [점검 1]` · `> [점검 2]` · `> [점검 3]` 주석과 학생의 `> 내 판단` 줄이 있다. `[점검 3]`은 지금 기술로 만들 수 있는지(지금 기술로 만들 수 있다 · 조건이 갖춰지면 가능 · 지금 기술로도 어려움)와 맞는 틀을 적은 배경 자료다. 수업에서 무엇을 만들고 · 흉내 내고 · 13회 뒤로 미룰지는 `docs/09_development_plan.md` 1항과 6항을 따른다
- `docs/09_development_plan.md` — 9회에 정한 개발 계획. 1 목표 · 2 대표 흐름 · 3 기억할 기록과 표 · 4 예외 흐름 · 5 개발 순서(10회 메인 기능 → 11회 살 붙이기 → 12회 시험 → 13회 제출) · 6 수업 뒤로 미룬 것 · 7 학생이 바꾸거나 거절한 것
- `docs/mockup/` — 학생이 6~8회에 만든 화면 목업(원본). 학생이 원하면 이 목업을 서비스의 시작 화면으로 그대로 쓴다(아래 「목업을 화면으로 쓸 때」)
- `docs/10_api_promise.md` — 핵심 행동의 API 약속(10회부터)
- `docs/12_test_record.md` — 사용자 흐름 테스트 기록(12회부터)

처음에 들어 있는 「할 일 정리」(`app/page.js`, `app/api/tasks/route.js`, `lib/db.js`의 `tasks` 표)는 선생님이 만든 예시다.
학생 서비스로 바꿀 때 이 예시를 본보기로 삼는다. 예시 화면과 API는 지우거나 바꿔도 되지만, `data/app.db`의 `tasks` 표는 지우지 않는다.

## 프로젝트 구조 (바꾸지 않는다)

- 화면: `app/page.js` (필요하면 `app` 안에 화면 파일을 더 만든다). 목업을 화면으로 쓰면 `public/screen/` 안의 파일이 화면이다
- API: `app/api/<이름>/route.js` — 화면은 `fetch`로 이 주소에 요청하고 JSON 응답을 받는다
- 데이터: `lib/db.js`의 `getDb()` — Node 내장 SQLite, 기록 파일은 `data/app.db`
- 실행: `npm run dev` → http://localhost:3000
- 언어: JavaScript. TypeScript로 바꾸지 않는다.

## 지킬 일

- 새 패키지가 필요하면 패키지 이름과 쓰는 이유를 먼저 설명한다. 학생이 「진행해」라고 하면 `npm install 이름`으로 설치한다. `package.json`은 직접 고치지 않고, `next.config.mjs`, `scripts/` 도 고치지 않는다.
- 프로젝트 전체를 다시 만들지 않는다. 요청받은 파일과 부분만 고친다.
- 학생은 plan 모드에서 「어느 파일을 어떻게 고칠지 설명해 줘」라고 묻고, 설명을 확인한 뒤 build 모드로 바꿔 「진행해」라고 한다. 「진행해」를 받으면 방금 설명한 대로만 고친다.
- build 모드에서 설명 없이 새 일을 받으면, 고치기 전에 무엇을 어느 파일에서 왜 고칠지 먼저 쉬운 말로 설명하고 「진행해」를 기다린다.
- 기능은 이 PC에서 `npm run dev`로 돌릴 수 있는 범위에서 만든다. 판단은 `docs/00_course_rules.md`의 판정 다섯 가지를 따른다.
  - 로그인은 이 PC 안의 회원가입·로그인만 만든다. 비밀번호는 Node 내장 `node:crypto`의 `scrypt`로 단방향 암호화해 저장한다.
  - 외부 AI(ChatGPT·Gemini 등)는 연결하지 않는다. 규칙·예시 답으로 흉내 낸 「수업용 프로토타입」을 만들고, 그 일을 API 하나에 모아 둔다. 화면에 「수업용 프로토타입」이라고 밝힌다.
  - 여러 사람이 쓰는 기능은 같은 PC에서 차례로 하거나 브라우저 창 두 개로 하는 것까지만 만든다.
  - 외부 DB·인터넷 공개·Google·Kakao 로그인·푸시·결제는 만들지 않는다. 필요해 보이면 「13회 뒤 스스로 할 것」이라고 알려 준다.
  - 「지금 기술로도 어려움」인 기능은 된 것처럼 만들지 않는다. 사람이 대신 하는 단계나 수업용 프로토타입을 제안한다.
- `docs/` 안의 문서는 고치지 않는다. 고칠 곳이 보이면 대화창에 알려만 준다. 문서는 학생이 직접 쓴다.
- 목업을 화면으로 쓸 때 (학생이 원할 때만):
  - `docs/mockup/`의 파일을 폴더째 `public/screen/`으로 복사한다. 원본 `docs/mockup/`은 고치지 않는다.
  - `app/page.js`는 `next/navigation`의 `redirect("/screen/index.html")` 한 줄로 그 화면을 연다. 목업의 HTML · CSS · JS(three.js 같은 파일도)는 React로 다시 쓰지 않고 그대로 둔다.
  - 목업은 아직 완성품이 아니다. 목업 안에서 `localStorage`에 저장하던 것, 미리 넣어 둔 예시 값, 버튼만 있고 하는 일이 없는 곳은 `fetch("/api/<이름>")` 요청으로 바꿔 SQLite에 저장하고 다시 불러오게 잇는다. 무엇이 흉내였는지 학생에게 먼저 알려 준다.
  - 목업을 쓰지 않으면 화면은 `app/page.js`에 만든다.
- 화면 모양을 바꿔 달라는 요청에서는 API와 저장(`lib/db.js`)을 건드리지 않는다.
- 화면에 보이는 글은 한국어로 쓴다. 응답 JSON은 `{ ok: true/false, message, ... }` 모양을 지킨다.
- 실패 응답에는 사용자가 무엇을 고쳐 다시 하면 되는지 적는다.
- 학생은 Windows를 쓴다. 터미널 명령을 알려 줄 때는 PowerShell 기준으로 쓴다.
- 답은 한국어로 짧게 한다.

## 대화 기록

- 학생이 말할 때마다, 답하기 전에 `AI대화기록.md` 맨 아래에
  「내가 보낸 말(그대로)」「네 답 요약」「고친 파일(없으면 없음)」을 덧붙인다.
  `AI대화기록.md`가 없으면 만든다.
- plan 모드에서는 파일을 쓸 수 없으므로 기록하지 않아도 된다. build 모드로 바뀐 뒤의 대화부터 기록한다.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
