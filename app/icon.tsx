import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #131320 0%, #0A0A14 50%, #050509 100%)",
          borderRadius: 14,
        }}
      >
        <svg
          width="56"
          height="56"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bladeL" x1="0.5" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="55%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
            <linearGradient id="bladeR" x1="0.5" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="55%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>
            <radialGradient id="dot" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FECDD3" />
              <stop offset="55%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#9D174D" />
            </radialGradient>
          </defs>

          {/* LEFT blade — blue triangular wedge */}
          <path d="M32 8 L8 56 L26 56 Z" fill="url(#bladeL)" />

          {/* RIGHT blade — violet triangular wedge */}
          <path d="M32 8 L56 56 L38 56 Z" fill="url(#bladeR)" />

          {/* Subtle outer highlights */}
          <path
            d="M32 11 L11 53 L14 53 L32 15 Z"
            fill="white"
            fillOpacity="0.16"
          />
          <path
            d="M32 11 L53 53 L50 53 L32 15 Z"
            fill="white"
            fillOpacity="0.11"
          />

          {/* Pink accent dot */}
          <circle cx="44" cy="13" r="4" fill="url(#dot)" />
          <circle cx="42.8" cy="11.8" r="1.2" fill="white" fillOpacity="0.85" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
