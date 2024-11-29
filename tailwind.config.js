/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src folder with js, jsx, ts, tsx extensions
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'], 
      },
      colors: {
        customYellow: '#FFD700', // Example custom color for the project
        customBlue: '#87CEEB',
      },
    },
  },
};
