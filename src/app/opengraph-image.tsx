import { ImageResponse } from "next/og";

export const alt = "Jaswant Sai Krishna — UX Designer & Researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background: "#ffffff",
        color: "#111111",
        fontFamily: "Arial, sans-serif",
        border: "18px solid #111111",
      }}
    >
      <div style={{ display: "flex", fontSize: 34, fontWeight: 800, letterSpacing: "-1px" }}>
        <span style={{ color: "#3f67e8" }}>J</span>
        <span style={{ color: "#f47b45" }}>S</span>
        <span style={{ color: "#8b5cf6" }}>K</span>
        <span style={{ color: "#f2c94c" }}>.</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: "-4px", lineHeight: 1 }}>
          Jaswant Sai Krishna
        </div>
        <div style={{ marginTop: 24, color: "#3f67e8", fontSize: 36, fontWeight: 700 }}>
          UX Designer &amp; Researcher
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 22, color: "#555555" }}>
        Research · Accessibility · Interaction Design
      </div>
    </div>,
    size,
  );
}
