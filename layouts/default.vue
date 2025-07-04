<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <NuxtLink to="/" class="flex items-center">
              <span class="text-xl font-bold">Elvis Liao</span>
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <NuxtLink to="/blog" class="text-gray-600 hover:text-gray-900">博客</NuxtLink>
            <NuxtLink to="/moments" class="text-gray-600 hover:text-gray-900">随笔</NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
      <slot />
    </main>

    <footer class="bg-white border-t">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p class="text-center text-gray-500">© {{ new Date().getFullYear() }} Elvis Liao. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template> 