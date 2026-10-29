"use client";
// 화면 — 사용자가 보고, 입력하고, 버튼을 누르는 곳이다. (예시: 할 일 정리)
// 처음 열 때 /api/tasks 에 GET 요청을 보내 저장된 할 일을 받아 온다.
// 추가를 누르면 /api/tasks 에 POST 요청을 보내고, 응답을 보여 준 뒤 목록을 다시 받아 온다.
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function load() {
    // ① 다시 불러오기: 어디로(/api/tasks), 어떻게(GET)
    const res = await fetch("/api/tasks");
    const data = await res.json();
    if (data.ok) setItems(data.items);
  }

  useEffect(() => {
    load().catch(() => setError("서비스에 연결하지 못했습니다. 새로고침해 주세요."));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setResult("");
    setError("");
    try {
      // ② 저장하기: 어디로(/api/tasks), 어떻게(POST), 무엇을({ text })
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      // ③ 응답: { ok, message }
      const data = await res.json();
      if (data.ok) {
        setResult(data.message);
        setText("");
        await load();
      } else {
        setError(data.message);
      }
    } catch {
      setError("서비스에 연결하지 못했습니다. 잠시 뒤 다시 눌러 주세요.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      <h1>할 일 정리</h1>
      <p className="desc">할 일을 입력하고 추가를 누르면 저장됩니다. 다시 열어도 남아 있습니다.</p>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="할 일을 입력하세요" />
        <button disabled={sending}>{sending ? "보내는 중" : "추가"}</button>
      </form>
      {result && <p className="result">{result}</p>}
      {error && <p className="error">{error}</p>}
      <ul className="list">
        {items.map((t) => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </main>
  );
}
