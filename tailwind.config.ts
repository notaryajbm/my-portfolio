import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",

        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },

        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },

        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },

        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },

        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },

        /* ✅ all mocha vars from your CSS */
        mocha: {
          rosewater: "hsl(var(--mocha-rosewater) / <alpha-value>)",
          gray: "hsl(var(--mocha-gray) / <alpha-value>)",
          flamingo: "hsl(var(--mocha-flamingo) / <alpha-value>)",
          pink: "hsl(var(--mocha-pink) / <alpha-value>)",
          mauve: "hsl(var(--mocha-mauve) / <alpha-value>)",
          red: "hsl(var(--mocha-red) / <alpha-value>)",
          maroon: "hsl(var(--mocha-maroon) / <alpha-value>)",
          peach: "hsl(var(--mocha-peach) / <alpha-value>)",
          yellow: "hsl(var(--mocha-yellow) / <alpha-value>)",
          green: "hsl(var(--mocha-green) / <alpha-value>)",
          teal: "hsl(var(--mocha-teal) / <alpha-value>)",
          sky: "hsl(var(--mocha-sky) / <alpha-value>)",
          sapphire: "hsl(var(--mocha-sapphire) / <alpha-value>)",
          blue: "hsl(var(--mocha-blue) / <alpha-value>)",
          lavender: "hsl(var(--mocha-lavender) / <alpha-value>)",

          text: "hsl(var(--mocha-text) / <alpha-value>)",
          subtext1: "hsl(var(--mocha-subtext1) / <alpha-value>)",
          subtext0: "hsl(var(--mocha-subtext0) / <alpha-value>)",

          overlay2: "hsl(var(--mocha-overlay2) / <alpha-value>)",
          overlay1: "hsl(var(--mocha-overlay1) / <alpha-value>)",
          overlay0: "hsl(var(--mocha-overlay0) / <alpha-value>)",

          surface2: "hsl(var(--mocha-surface2) / <alpha-value>)",
          surface1: "hsl(var(--mocha-surface1) / <alpha-value>)",
          surface0: "hsl(var(--mocha-surface0) / <alpha-value>)",

          base: "hsl(var(--mocha-base) / <alpha-value>)",
          mantle: "hsl(var(--mocha-mantle) / <alpha-value>)",
          crust: "hsl(var(--mocha-crust) / <alpha-value>)",
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
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
} satisfies Config;
