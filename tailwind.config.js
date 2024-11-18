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
      animation: {
        spin: 'spin 1.5s linear infinite', // Adjust timing (e.g., 1s)
      },
      minHeight: {
        '20vh': '20vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
    },
  },
  plugins: [],
};
