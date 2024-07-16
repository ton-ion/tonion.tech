const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...fontFamily.sans],
        jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
        mono: ['"Fira Code"', ...fontFamily.mono],
      },
      borderRadius: {
        sm: "4px",
      },
      screens: {
        sm: "0px",
        lg: "997px",
      },
      colors: {
        absolute: {
            white: "var(--absolute-white)",
            black: "var(--absolute-black)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
            DEFAULT: "var(--primary)",
            foreground: "var(--primary-foreground)",
            50: "var(--primary-50)",
            100: "var(--primary-100)",
            200: "var(--primary-200)",
            300: "var(--primary-300)",
            400: "var(--primary-400)",
            500: "var(--primary-500)",
            600: "var(--primary-600)",
            700: "var(--primary-700)",
            800: "var(--primary-800)",
            900: "var(--primary-900)",
            950: "var(--primary-950)",
        },
        gray: {
            50: "var(--gray-50)",
            100: "var(--gray-100)",
            200: "var(--gray-200)",
            300: "var(--gray-300)",
            400: "var(--gray-400)",
            500: "var(--gray-500)",
            600: "var(--gray-600)",
            700: "var(--gray-700)",
            800: "var(--gray-800)",
            900: "var(--gray-900)",
            950: "var(--gray-950)",
        },

        secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
            50: "var(--secondary-50)",
            100: "var(--secondary-100)",
            200: "var(--secondary-200)",
            300: "var(--secondary-300)",
            400: "var(--secondary-400)",
            500: "var(--secondary-500)",
            600: "var(--secondary-600)",
            700: "var(--secondary-700)",
            800: "var(--secondary-800)",
            900: "var(--secondary-900)",
            950: "var(--secondary-950)",
        },
        additional: {
            error: "var(--additional-error)",
            success: "var(--additional-success)",
            warning: "var(--additional-warning)",
        },
        destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
        },
        card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
        },
        
    },
    
    },
  },
  plugins: [],
};