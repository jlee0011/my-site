// app/map/page.js
import ClientPage from "./ClientPage";

export const dynamic = "force-dynamic"; // 정적 프리렌더 방지(응급)

export default function MapPage() {
  return <ClientPage />;
}
