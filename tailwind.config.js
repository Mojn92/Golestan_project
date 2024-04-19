/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    screens: {
      'mobile1':'0px',
      // => @media (min-width: 0px) { ... }
      'tablet1': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop1': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop1': '1366px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

