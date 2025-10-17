import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#f8f9fa',
        'foreground': '#212529',
        'primary': '#007bff',
        'secondary': '#6c757d',
        'accent': '#17a2b8',
      },
      fontFamily: {
         sans: ['var(--font-fira-sans)', 'sans-serif'],
        display: ['var(--font-fira-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
}
export default config