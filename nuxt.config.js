import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Franziskas Website',
      htmlAttrs: {
        lang: 'de',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'A tech portfolio by Franziska.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '~/assets/favicon.ico' },
      ],
    },
  },
  css: ['~/assets/styles/tailwind.css'],
  buildModules: ['@nuxt/typescript-build'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [svgLoader()],
  },
});
