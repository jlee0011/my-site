// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "500px", fontFamily: "sans-serif" }}>
      <h1>월급루팡 유성민 🎉</h1>

      <div style={{ marginTop: 24 }}>
        <Link
          href="/map"
          style={{
            display: "inline-block",
            padding: "10px 16px",
            borderRadius: 8,
            border: "1px solid #ddd",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          지도 보러가기 →
        </Link>
      </div>
    </main>
  );
}
