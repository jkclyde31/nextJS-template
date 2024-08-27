/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        'rubik-b': ['Rubik-bold'],
        'barlow': ['barlow'],
        'barlow-m': ['barlow-m'],
        'roboto': ['roboto'],
        'myriad': ['myriad'],
        'poppins': ['poppins'],
        'poppins-l': ['poppins-l'],
        'poppins-m': ['poppins-m'],
        'poppins-sb': ['poppins-sb'],
        'poppins-b': ['poppins-b'],
        'nunito': ['nunito'],
      },

      screens: {
        'tablet': {'max': '959px'}, 
        'xs': '475px',  // You can adjust this value as needed

      
      }

    },
  },
  plugins: [],
};
