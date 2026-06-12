"use client";

interface SunMarkProps {
  size?: number;
  color?: string;
  className?: string;
  rotate?: boolean;
  "aria-hidden"?: boolean;
}

export default function SunMark({
  size = 48,
  color = "#f0e6c8",
  className = "",
  rotate = false,
  "aria-hidden": ariaHidden,
}: SunMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${rotate ? "animate-spin-slow" : ""} ${className}`}
      aria-hidden={ariaHidden}
      role={ariaHidden ? undefined : "img"}
      aria-label={ariaHidden ? undefined : "Bright Lives sun mark"}
    >
      {/* Center circle */}
      <circle cx="24" cy="24" r="8" fill={color} />
      {/* 8 rays */}
      <line x1="24" y1="2" x2="24" y2="10" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="24" y1="38" x2="24" y2="46" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="2" y1="24" x2="10" y2="24" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="38" y1="24" x2="46" y2="24" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="7.76" y1="7.76" x2="13.42" y2="13.42" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="34.58" y1="34.58" x2="40.24" y2="40.24" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="40.24" y1="7.76" x2="34.58" y2="13.42" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="13.42" y1="34.58" x2="7.76" y2="40.24" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
