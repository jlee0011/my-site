// app/map/MapClient.jsx
"use client";
import { useEffect, useState } from "react";

export default function MapClient() {
  const [mods, setMods] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const leaflet = await import("leaflet");
      const rl = await import("react-leaflet");
      const L = leaflet.default || leaflet;

      const icon = new L.Icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      if (mounted) {
        setMods({
          MapContainer: rl.MapContainer,
          TileLayer: rl.TileLayer,
          Marker: rl.Marker,
          Popup: rl.Popup,
          icon,
        });
      }
    })();
    return () => { mounted = false; };
  }, []);

  if (!mods) return null;

  const { MapContainer, TileLayer, Marker, Popup, icon } = mods;
  const center = [37.5665, 126.9780];

  return (
    <main style={{ padding: 24 }}>
      <h1>지도</h1>
      <div style={{ height: 420, width: "100%", borderRadius: 8, overflow: "hidden" }}>
        <MapContainer center={center} zoom={14} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center} icon={icon}>
            <Popup>서울</Popup>
          </Marker>
        </MapContainer>
      </div>
    </main>
  );
}
