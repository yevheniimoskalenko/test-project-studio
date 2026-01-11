// https://nuxt.com/docs/api/configuration/nuxt-config
const {
  STUDIO_GITHUB_CLIENT_ID,
  STUDIO_GITHUB_CLIENT_SECRET,
} = process.env
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', 'nuxt-studio'],
    runtimeConfig: {
    public: {
      STUDIO_GITHUB_CLIENT_ID,
      STUDIO_GITHUB_CLIENT_SECRET
    }
  },
  studio: {
    dev: true,
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'yevheniimoskalenko',
      repo: 'test-project-studio',
      branch: 'master'
    }
  }
})