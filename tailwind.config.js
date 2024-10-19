module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        SelectedMenuBgColor: '#E5E7EB',
        SelectedMenuTextColor: 'rgb(30 58 138)',
        
        HoverLinksBgColor:'rgb(96 165 250)',
        HoverLinksTextColor: '#FFF',
      },
      minHeight: {
        '20vh': '20vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
      width: {
        full: "100%",
      },
      margin: {
        0: "0",
      },
      padding: {
        0: "0",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["corporate"],
  },
};
