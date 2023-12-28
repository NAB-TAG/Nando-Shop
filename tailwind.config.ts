import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      {
        "nando": {
          "primary": "#070A57", 
          "secondary": "#1d4ed8",
          "accent": "#86198f",
          "neutral": "#ffffff",
          "base-100": "#F5F5F5",  
          "info": "#22d3ee",                   
          "success": "#49FF75",
          "warning": "#FAE122",
          "error": "#e11d48",
        },
        "bruno": {
          "primary": "#0B0E37",
          "secondary": "#2654A1",
          "accent": "#3B0078",
          "neutral": "#09090C",
          "base-100": "#1E1E1E",
          "info": "#137D9E",
          "success": "#00B33C",
          "warning": "#CCAA00",
          "error": "#B50032"
        },
        "matias": {}
      }
    ],
  },
}
export default config
