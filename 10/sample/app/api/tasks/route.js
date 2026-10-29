// API — 화면이 보낸 요청을 받아 처리하고 응답을 돌려주는 창구다.
// 주소: /api/tasks
//   GET  : 저장된 할 일을 보여 달라  → { ok, items }
//   POST : 할 일 하나를 저장해 달라 → 보낼 것 { text } · 돌려줄 것 { ok, message }
import { getDb } from "@/lib/db";

export async function GET() {
  const items = getDb().prepare("SELECT * FROM tasks ORDER BY id DESC").all();
  return Response.json({ ok: true, items });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, message: "요청을 읽지 못했습니다." }, { status: 400 });
  }
  const text = String(body?.text ?? "").trim();

  // 입력 문제: 무엇을 고쳐야 하는지 알려 준다.
  if (!text) {
    return Response.json({ ok: false, message: "할 일을 입력하세요." }, { status: 400 });
  }

  // 성공: SQLite에 저장하고 결과를 돌려준다.
  getDb().prepare("INSERT INTO tasks (text) VALUES (?)").run(text);
  return Response.json({ ok: true, message: "추가했습니다." });
}
