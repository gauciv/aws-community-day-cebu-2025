/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.ts'
    },
    autoprefixer: {},
  },
};
