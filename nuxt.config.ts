// https://nuxt.com/docs/api/configuration/nuxt-config
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
    }
  }
})