<template>
  <main>
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>
      <h1>Сторінку не знайдено</h1>
      <NuxtLink to="/">Повернутися на головну</NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value && import.meta.server) {
  const event = useRequestEvent()
  if (event) {
    setResponseStatus(event, 404)
  }
}
</script>

<style scoped>
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
  line-height: 1.6;
}

:deep(h1) {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

:deep(a) {
  color: #42b983;
  text-decoration: none;
}

:deep(a:hover) {
  text-decoration: underline;
}
</style>
