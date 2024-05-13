/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
     
      'tablet1': '768px',
      // => @media (min-width: 768px) { ... }

      'tablet2': '880px',
      // => @media (min-width: 880px) { ... }
                                                    
      'laptop1': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop1': '1366px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
  
}






