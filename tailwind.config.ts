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
        surface: "#0F1524",
        raised: "#141B2D",
        divider: "#1E293B",
        "divider-strong": "#2A3650",
        heading: "#F1F5F9",
        body: "#E2E8F0",
        secondary: "#A3B0C2",
        // Text-safe muted tone: at least 4.5:1 on background and surface.
        muted: "#7D8BA1",
        cyan: "#00D4FF",
        purple: "#7C3AED",
        // Lighter violet for text; purple itself is reserved for borders and markers.
        violet: "#A78BFA"
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148, 163, 184, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.07) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
