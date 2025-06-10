<template>
  <article class="prose prose-lg max-w-none">
    <h1>{{ post?.title }}</h1>
    <div class="text-gray-500 mb-8">
      {{ post?.date ? new Date(post.date).toLocaleDateString('zh-CN') : '' }}
    </div>
    <ContentRenderer v-if="post" :value="post" />
  </article>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const { path } = useRoute()
const { data: post } = await useAsyncData(path, () => queryCollection('content').path(path).first())
</script> 