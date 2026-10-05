import { ImageResponse } from "next/og";
import { hero, site } from "@/content/site";

export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#ffffff",
          color: "#111827",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>{site.logo}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#64748b",
            }}
          >
            {hero.eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              maxWidth: 940,
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            {hero.title}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#64748b" }}>
          {`${site.name} · ${site.location}`}
        </div>
      </div>
    ),
    size,
  );
}
