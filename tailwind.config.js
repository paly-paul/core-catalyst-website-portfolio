/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue:    '#3b5bdb',
        indigo:  '#4c6ef5',
        violet:  '#7950f2',
        green:   '#40c057',
        cyan:    '#22b8cf',
        red:     '#fa5252',
        yellow:  '#fab005',
        orange:  '#fd7e14',
        bg:      '#f2f4fb',
        surface: '#ffffff',
        border:  '#e4e9f4',
        text:    '#1a1f36',
        muted:   '#8792b2',
        subtle:  '#c4cbe8',
      },
      borderRadius: {
        card: '16px',
        btn:  '10px',
      },
      boxShadow: {
        card:  '0 2px 20px rgba(59,91,219,.08)',
        hover: '0 8px 32px rgba(59,91,219,.14)',
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #3b5bdb 0%, #7950f2 100%)',
        'grad-hero':    'linear-gradient(145deg, #eef2ff 0%, #f5f3ff 45%, #faf5ff 100%)',
      },
      maxWidth: { site: '1160px' },
      fontFamily: {
        sora:   ['Sora', 'sans-serif'],
        dm:     ['DM Sans', 'sans-serif'],
      },
      height: { nav: '64px', subnav: '44px' },
    },
  },
}
