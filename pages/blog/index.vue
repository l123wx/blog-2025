<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">博客文章</h1>
    
    <div class="space-y-6">
      <article v-for="article in articles" :key="article.path" class="bg-white p-6 rounded-lg shadow">
        <NuxtLink :to="`${article.path}`">
          <h2 class="text-2xl font-semibold mb-2">{{ article.title }}</h2>
          <p class="text-gray-600 mb-4">{{ article.description }}</p>
          <div class="text-sm text-gray-500">
            {{ new Date(article.date).toLocaleDateString('zh-CN') }}
          </div>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const { data: articles } = await useAsyncData('content', () => {
  console.log(queryCollection('content').all())
  return queryCollection('content').all()
})
</script> 