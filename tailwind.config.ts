import type { Config } from 'tailwindcss';

import { black, colors, currentColor, transparent, white } from './src/tokens/colors';

export default {
  content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.mdx'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [],
  theme: {
    colors: {
      ...colors,
      black,
      currentColor,
      transparent,
      white,
    },
    extend: {
      fontFamily: {
        sans: ['Roboto Mono Variable', 'monospace'],
      },
    },
  },
} satisfies Config;
