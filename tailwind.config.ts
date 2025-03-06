import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "90svh": "90svh",
        "80svh": "80svh",
      },
      fontFamily: {
        Abril: ["Abril Fatface", "serif"],
        Inconsolata: ["Inconsolata", "monospace"],
        Poppins: ["Poppins", "sans-serif"],
        Atkinson: ["Atkinson Hyperlegible", "sans-serif"],
        Exo: ["Exo 2", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Akaya : ["Akaya Kanadaka", "cusrsive"],
        Leckerli :["Leckerli One", "curisve"],
      },
      colors: {
        "red-bull": "#F62F63",
        "t-b-9": "rgba(0, 0, 0, 0.9)",
        "t-b-4": "rgba(0,0,0, 0.4)",
        "t-b-7": "rgba(0, 0, 0, 0.7)",
        "johar-orange": "#F2880C",
        "johar-secondary": "#814F47",
        primary: {
          DEFAULT: "#FF6B35",
          dark: "#E85A2D",
        },
        secondary: "#FFFFFF",
      },
      boxShadow: {
        "3xl": "-16px -6px 15px 0px rgba(0, 0, 0, 0.3)",
        neon: "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #bc13fe, 0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe",
        "neon-2":
          "0 0 2px 4px rgba(200, 230, 255, 0.5), 0 -2px 2px 3px rgba(200, 230, 255, 0.5) inset, 0 0 2px 10px rgba(100, 150, 255, 0.9), 0 0 2px 7px rgba(100, 150, 255, 1) inset, 0 0 12px 13px rgba(0, 50, 255, 0.9), 0 0 12px 11px rgba(0, 50, 255, 0.7) inset, 0 8px 30px 18px rgba(0, 0, 0, 0.8), 0 8px 25px 12px rgba(0, 0, 0, 0.7) inset",
      },
      backgroundImage: {
        "mall-image":
          "url(https://firebasestorage.googleapis.com/v0/b/johar-basket.appspot.com/o/images_for_website%2Fmall-1.jpg?alt=media&token=2d807486-d7dd-40b3-90f7-aec8f193e96c)",
        "mall-image-2":
          "url(https://firebasestorage.googleapis.com/v0/b/johar-basket.appspot.com/o/images_for_website%2Fmall-2.jpg?alt=media&token=335fa6b4-40de-457c-9359-74f2b3d71a39)",
        "mall-image-3":
          "url(https://firebasestorage.googleapis.com/v0/b/johar-basket.appspot.com/o/images_for_website%2Fmall-3.jpg?alt=media&token=d41a5604-536c-4590-9dbb-95b2511fa74c)",
        "mall-image-4":
          "url(https://firebasestorage.googleapis.com/v0/b/johar-basket.appspot.com/o/images_for_website%2Fmall-4.jpg?alt=media&token=38147e37-c081-4b03-af52-1f84fea71bc9)",
        left: "url(https://firebasestorage.googleapis.com/v0/b/johar-basket.appspot.com/o/images_for_website%2Fleft.jpg?alt=media&token=acf61d85-fdf3-4542-9893-9d7d6630c9ee)",
        middle:
          "url(https://firebasestorage.googleapis.com/v0/b/johar-basket.appspot.com/o/images_for_website%2Fmiddle.jpg?alt=media&token=9ddafc98-4467-4d18-98c3-2e8cf3e47c47)",
        right: "url(https://firebasestorage.googleapis.com/v0/b/johar-basket.appspot.com/o/images_for_website%2Fright.jpg?alt=media&token=8d5b4f9d-ff2b-4bb8-80d1-22d4da7628e4)",
        "random-300x500": "url(https://source.unsplash.com/random/300×500)",
        "logo-2": "url(/Logo-1.jpg)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "image-1":
          "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);",
        "landing-svg": "url(/landing.svg)",
        "image-upload":
          "url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
