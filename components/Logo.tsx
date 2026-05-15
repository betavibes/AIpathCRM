import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  /** When true, removes the wrapper padding (use if your image already has its own background card) */
  bare?: boolean;
};

const heights = {
  sm: 32,
  md: 44,
  lg: 64,
};

export default function Logo({ size = "md", className = "", bare = true }: LogoProps) {
  const h = heights[size];
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/aipath-logo.png"
        alt="AIpath CRM"
        width={h * 4}
        height={h}
        priority
        unoptimized
        className={`object-contain ${bare ? "" : "rounded-xl"}`}
        style={{ height: h, width: "auto" }}
      />
    </span>
  );
}
