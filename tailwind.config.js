/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd7ff',
          300: '#8ebeff',
          400: '#589cff',
          500: '#1E65F3',
          600: '#1046c2',
          700: '#0f389e',
          800: '#123183',
          900: '#152c6c',
          950: '#0f1b42',
        },
        success: {
          50: '#effef7',
          100: '#dafeef',
          200: '#b8f9dd',
          300: '#81f0c0',
          400: '#41de97',
          500: '#00BA34',
          600: '#119c52',
          700: '#127c45',
          800: '#15623a',
          900: '#145133',
          950: '#052e1d',
        },
        danger: {
          50: '#fff1f2',
          100: '#ffe0e2',
          200: '#ffc6cb',
          300: '#ff9da5',
          400: '#ff6673',
          500: '#F03A47',
          600: '#db1a29',
          700: '#b91425',
          800: '#991425',
          900: '#821627',
          950: '#480812',
        },
        info: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#9747FF',
          600: '#7e22ce',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};