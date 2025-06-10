<template>
  <div>
    <section class="mb-12">
      <h1 class="text-4xl font-bold mb-6">欢迎来到我的个人空间</h1>
      <p class="text-lg text-gray-600">
        这里记录我的技术探索、项目经验和生活感悟。
      </p>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- 最新博客文章 -->
      <section>
        <h2 class="text-2xl font-bold mb-4">最新博客</h2>
        <div class="space-y-4">
          <NuxtLink to="/blog" class="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 class="text-lg font-semibold">查看所有博客文章 →</h3>
          </NuxtLink>
        </div>
      </section>

      <!-- 最新随笔 -->
      <section>
        <h2 class="text-2xl font-bold mb-4">最新随笔</h2>
        <div class="space-y-4">
          <NuxtLink to="/notes" class="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 class="text-lg font-semibold">查看所有随笔 →</h3>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script> 