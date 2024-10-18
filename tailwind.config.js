/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Notosans: ["var(--font-Notosans)"],
      },
      backgroundImage: {
        'chairman-bg': "url('/slogun.png')",
        'hero-banner': "url('/hero-banner.jpg')",
        'membership-bg': "url('/membership-bg.jpg')",
        'stats-bg': "url('/stats-bg.jpg')",
        'stats-gradient': "linear-gradient(180deg, #0625439D 0%, #01070DC6 100%)"
      },
      colors: {
        'theme-blue': '#0D2F80',
        primary: {
          '300' : '#1A65AD',
        },
        gray:{
          '100': "#FCFCFC",
        },
        black:{
          '300': "#343434"
        },
        'theme-orange': "#ED9C2E",
      },
      fontSize: {
        "40": '40px',
        "1xl": "22px",
      },
      spacing: {
        '4': '15px',
        '2.5': '10px',
        '17' : '70px'
      },
      width: {
        '90': '90%',
        '10': '10%',
      },
      maxWidth: {
        '90': '90%',
      },
      borderRadius: {
        '4xl': '30px',
      },
      boxShadow: {
        'shadow': '0 3px 20px rgb(0 0 0 / 10%)',
        'top': '0px 0px 20px rgb(0 0 0 / 6%)',
      }
    },
  },
  plugins: [],
};
