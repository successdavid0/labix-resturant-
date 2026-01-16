import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        // Light Mode Gold Palette
        gold: {
          primary: "#D4AF37",
          secondary: "#F4E4C1",
          accent: "#B8961E",
          muted: "#A88F3D",
        },
        // Light Mode White Palette
        white: {
          base: "#FFFFFF",
          off: "#FAFAF8",
          warm: "#F5F5F0",
        },
        // Dark Mode
        dark: {
          bg: {
            primary: "#0D0D0D",
            secondary: "#1A1A1A",
            elevated: "#242424",
          },
          gold: {
            primary: "#E0C158",
            muted: "#A88F3D",
          },
        },
        // Semantic Colors
        success: {
          light: "#4CAF50",
          dark: "#66BB6A",
        },
        warning: {
          light: "#FF9800",
          dark: "#FFA726",
        },
        error: {
          light: "#F44336",
          dark: "#EF5350",
        },
        info: {
          light: "#2196F3",
          dark: "#42A5F5",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Playfair Display", "serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        accent: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        "h1-d": ["48px", { lineHeight: "56px" }],
        "h1-m": ["32px", { lineHeight: "40px" }],
        "h2-d": ["40px", { lineHeight: "48px" }],
        "h2-m": ["28px", { lineHeight: "36px" }],
        "h3-d": ["32px", { lineHeight: "40px" }],
        "h3-m": ["24px", { lineHeight: "32px" }],
        "h4-d": ["24px", { lineHeight: "32px" }],
        "h4-m": ["20px", { lineHeight: "28px" }],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(212, 175, 55, 0.1), 0 2px 4px -1px rgba(212, 175, 55, 0.06)",
        "card-hover": "0 10px 15px -3px rgba(212, 175, 55, 0.2), 0 4px 6px -2px rgba(212, 175, 55, 0.1)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
