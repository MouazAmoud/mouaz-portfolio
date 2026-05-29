import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0E1A",
        surface: "#111827",
        divider: "#1E293B",
        heading: "#F1F5F9",
        body: "#E2E8F0",
        secondary: "#94A3B8",
        muted: "#64748B",
        hints: "#475569",
        disabled: "#334155",
        cyan: "#00D4FF",
        purple: "#7C3AED"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0, 212, 255, 0.12), 0 18px 50px rgba(0, 212, 255, 0.10)",
        violet: "0 0 0 1px rgba(124, 58, 237, 0.18), 0 20px 55px rgba(124, 58, 237, 0.10)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
