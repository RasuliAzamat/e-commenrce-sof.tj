import {defineNuxtConfig} from 'nuxt'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true,
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap',
          rel: 'stylesheet',
        },
      ],
      script: [{src: './assets/js/index.js'}],
    },
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  router: {
    options: {
      linkExactActiveClass: 'active',
      linkActiveClass: 'active',
    },
  },
  css: ['@/assets/css/main.css'],
})
