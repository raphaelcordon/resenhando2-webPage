module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
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
    },
  },
  // plugins: [require('daisyui')],
  plugins: [],
  // daisyui: {
  //   themes: ["corporate"],
  // },
};
