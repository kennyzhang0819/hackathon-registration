/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'karla': 'var(--font-karla)',
        'space-grotesk': 'var(--font-space-grotesk)',
      },
      colors: {
        'hackathon-blue': '#3D68BB',
        'hackathon-dark-blue': '#223f77',
        'hackathon-brown': '#A67B5B',
      },
      borderRadius: {
        'xl': '1rem',
      },
    },
  },
  plugins: [],
};
