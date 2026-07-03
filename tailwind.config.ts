import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          cream: "#F5F0E1",
          black: "#111111",
          yellow: "#FFE566",
          cyan: "#5CE1E6",
          pink: "#FF6B9D",
          white: "#FFFFFF",
          gray: "#5C5C5C",
          muted: "#E8E0D0",
        },
        background: "#F5F0E1",
        surface: "#F5F0E1",
        "on-surface": "#111111",
        "on-surface-variant": "#444444",
        primary: "#FFE566",
        "on-primary": "#111111",
        "surface-container-low": "#FFFFFF",
        "surface-container-high": "#E8E0D0",
        "surface-dim": "#D4CBC0",
        "outline-variant": "#111111",
        outline: "#111111",
      },
      borderRadius: {
        DEFAULT: "0",
        none: "0",
        lg: "0",
        xl: "0",
        full: "0",
      },
      spacing: {
        "container-max": "1280px",
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        gutter: "24px",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "IBM Plex Mono", "monospace"],
        "display-lg": ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        "body-lg": ["var(--font-ibm-plex-mono)", "IBM Plex Mono", "monospace"],
        "headline-lg": ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        "headline-xl": ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        "body-md": ["var(--font-ibm-plex-mono)", "IBM Plex Mono", "monospace"],
        "label-md": ["var(--font-ibm-plex-mono)", "IBM Plex Mono", "monospace"],
        "display-lg-mobile": ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["80px", { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-xl": ["48px", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": ["13px", { lineHeight: "20px", letterSpacing: "0.12em", fontWeight: "600" }],
        "display-lg-mobile": ["48px", { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "700" }],
      },
      maxWidth: {
        "container-max": "1280px",
      },
      boxShadow: {
        brutal: "6px 6px 0 0 #111111",
        "brutal-sm": "4px 4px 0 0 #111111",
        "brutal-lg": "10px 10px 0 0 #111111",
        "brutal-hover": "8px 8px 0 0 #111111",
      },
    },
  },
  plugins: [],
};

export default config;
