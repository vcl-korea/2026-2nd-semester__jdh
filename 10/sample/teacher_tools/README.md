# 교사용 (학생 ZIP에 들어가지 않는다)

- `example_tasks_route.js` — 옛 11회 시범용. **2026-10-30부터 같은 예시가 학생 프로젝트에 들어 있다**(`app/api/tasks/route.js`). 이 파일은 더 쓰지 않는다(지울지는 선생님이 정한다).
  2026-10-30 선생님 Mac(Node 24 · Next 16.4.3)에서 학생 프로젝트의 예시로 GET · POST · 빈 입력 400 · 서버 재시작 뒤 다시 조회까지 확인했다.

## 템플릿 확인 기록 (2026-10-29 · macOS)

- `npm install` → node_modules 약 350MB. 학교 네트워크에서 시간이 걸릴 수 있으니 10-1 시작 직후 바로 시킨다.
- `npm run dev` → http://localhost:3000 · 예시 「할 일 정리」 `/api/tasks` 정상·빈 입력 응답 확인.
- `next dev`가 AGENTS.md 끝에 Next.js 문서 안내 블록을 덧붙인다(16.4부터). 템플릿에 미리 넣어 두었다.
- `npm run pack` → 바깥 폴더에 submit.zip (node_modules·.next 제외, data/app.db 포함).

## 학교 Windows PC에서 한 번 더 확인할 것

- [ ] `node --version` 이 22.13 이상인가 (node:sqlite 필요). 24 LTS 권장.
- [ ] `npm install` 이 학교 네트워크에서 끝나는가, 걸리는 시간.
- [ ] `npm run pack` 의 tar 가 ZIP을 만들고, 한글 파일 이름(AI대화기록.md)이 탐색기에서 깨지지 않는가.
- [ ] VS Code 확장 SQLite Viewer(qwtel.sqlite-viewer)로 data/app.db 가 열리는가.
- [ ] 9-1에서 9회 ZIP의 파일을 `06`에 붙여 넣을 때 뜨는 창의 단추 이름이 「대상 폴더의 파일 덮어쓰기」인가. 교과서 9-1과 9회 README.txt가 이 이름을 부른다. 다르면 두 곳을 고친다.
