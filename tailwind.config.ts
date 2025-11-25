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
        // Custom color palette from design system
        background: "#0A0E27",         // Deep navy background
        foreground: "#F8FAFC",         // Off-white text
        primary: {
          DEFAULT: "#00D9FF",          // Cyan - data science blue
          glow: "rgba(0, 217, 255, 0.25)", // Cyan glow
        },
        secondary: "#7B68EE",          // Purple - AI/ML
        accent: "#10B981",             // Green - success metrics
        card: {
          DEFAULT: "#1A1F3A",          // Card backgrounds
          border: "#2D3548",           // Subtle borders
        },
        muted: "#64748B",              // Secondary text, labels

        // shadcn/ui compatibility
        border: "#2D3548",
        input: "#1A1F3A",
        ring: "#00D9FF",
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        xs: '0.75rem',      // 12px - Small labels
        sm: '0.875rem',     // 14px - Secondary text
        base: '1rem',       // 16px - Body text
        lg: '1.125rem',     // 18px - Large body
        xl: '1.25rem',      // 20px - Subheadings
        '2xl': '1.5rem',    // 24px - H3
        '3xl': '1.875rem',  // 30px - H2
        '4xl': '2.25rem',   // 36px - H1 mobile
        '5xl': '3rem',      // 48px - H1 desktop
        '6xl': '3.75rem',   // 60px - Hero
      },
      spacing: {
        '18': '4.5rem',     // 72px
        '88': '22rem',      // 352px
        '128': '32rem',     // 512px
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
