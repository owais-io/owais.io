import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/lib/data";

export const alt = "Owais Abbasi — Kubestronaut & DevOps / Platform Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const photo = await readFile(join(process.cwd(), "public", profile.photo));
const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 72px",
          background: "linear-gradient(135deg, #0a0e17 0%, #15213d 100%)",
          color: "#e6eaf2",
        }}
      >
        <img
          src={photoSrc}
          width={320}
          height={320}
          alt=""
          style={{ borderRadius: 40, border: "4px solid #326ce5" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, color: "#6b9bff" }}>owais.io</div>
          <div style={{ fontSize: 76, fontWeight: 700, marginTop: 12 }}>{profile.name}</div>
          <div style={{ fontSize: 32, marginTop: 16, color: "#c8d2e6" }}>
            Kubestronaut · DevOps / Platform Engineer
          </div>
          <div style={{ fontSize: 28, marginTop: 28, color: "#94a0b8" }}>
            CKA · CKAD · CKS · KCNA · KCSA
          </div>
        </div>
      </div>
    ),
    size,
  );
}
