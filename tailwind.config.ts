module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.mdx",
  ],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        box: "var(--box)",
        "box-border": "var(--box-border)",
        "primary-secondary": "var(--primary-secondary)",
        "foreground-secondary": "var(--foreground-secondary)",
        "background-secondary": "var(--background-secondary)",
        "background-dark": "var(--background-dark)",
        "box-accent": "var(--box-accent)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
