export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', 'nuxt-studio'],
  studio: {
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'yevheniimoskalenko',
      repo: 'test-project-studio',
      branch: 'master'
    },
  },
  nitro: {
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
      crawlLinks: true
    }
  }
})