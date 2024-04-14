/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    screens: {
      'tablet1': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop1': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop1': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

