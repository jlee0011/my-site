import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          background:
            "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "20px",
        }}
      >
        🎉🎉🎉🎉 월급루팡 유성민 🎉🎉🎉🎉
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "24px" }}>
        Next.js + Vercel 배포 성공!
      </p>

      <Link
        href="/map"
        style={{
          display: "inline-block",
          padding: "10px 16px",
          borderRadius: 8,
          border: "1px solid #ddd",
          textDecoration: "none",
          fontWeight: 600,
          transition: "all 0.2s ease",
        }}
      >
        지도 보러가기 →
      </Link>
    </main>
  );
}
