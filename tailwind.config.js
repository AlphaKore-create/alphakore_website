/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ak-bg-top': '#05070b',
        'ak-bg-mid': '#101522',
        'ak-bg-bottom': '#f6a454',
          'ak-surface': '#05070b',
          'ak-surface-soft': '#07080a',
        'ak-border': '#262a3a',
        'ak-text': '#f9fafb',
        'ak-text-muted': '#9ca3af',
        'ak-primary': '#f97316',
        'ak-primary-soft': '#fdba74',
        'ak-accent-cyan': '#22d3ee',
      },
      backgroundImage: {
        'ak-body': "linear-gradient(180deg, #05070b 0%, #05070b 18%, #101522 45%, #1e2432 70%, #f6a454 100%)",
      },
    },
  },
  plugins: [],
};
