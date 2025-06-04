/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1000px',
        xl: '1720px',
        '2xl': '2100px',
        'qhd': '2560px',
        '4k': '3840px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'fadeIn': 'fadeIn 0.3s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 1s infinite',
        'float-delayed-2': 'float 3s ease-in-out 2s infinite',
        'float-delayed-3': 'float 3s ease-in-out 3s infinite'
      }
    },
  },
  plugins: [],
}
