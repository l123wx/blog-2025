<template>
  <div>
    <!-- 随笔列表 -->
    <div class="space-y-8">
      <div v-for="moment in moments" :key="moment.created_at" class="bg-white rounded-lg shadow p-6">
        <h2 class="text-2xl font-bold mb-4">{{ moment.title }}</h2>
        <MDC :value="moment.body" class="prose max-w-none mb-4" />
        <div class="flex items-center justify-between text-sm text-gray-500">
          <div class="flex items-center space-x-4">
            <span>{{ formatDate(moment.created_at) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <div class="mt-8 flex justify-center">
      <UPagination
        v-model:page="page"
        :total="total"
        :items-per-page="pageSize"
        :show-edges="true"
        :sibling-count="1"
        @update:page="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

interface Moment {
  title: string
  body: string
  created_at: string
  updated_at: string
  reactions: {
    total_count: number
    '+1': number
    '-1': number
    laugh: number
    hooray: number
    confused: number
    heart: number
    rocket: number
    eyes: number
  }
}

interface ApiResponse {
  success: boolean
  data?: Moment[]
  pagination?: {
    page: number
    pageSize: number
    total: number
    totalPages: number
  }
  error?: string
}

const page = ref(1)
const pageSize = ref(10)
const total = ref(0)
const moments = ref<Moment[]>([])
const loading = ref(false)

// 获取随笔列表
const fetchMoments = async () => {
  if (loading.value) return
  
  loading.value = true
  try {
    const { data } = await useFetch<ApiResponse>('/api/moments', {
      query: {
        page: page.value,
        pageSize: pageSize.value
      }
    })

    if (data.value?.success && data.value.data && data.value.pagination) {
      moments.value = data.value.data
      total.value = data.value.pagination.total
    }
  } finally {
    loading.value = false
  }
}

// 处理页码变化
const handlePageChange = (newPage: number) => {
  page.value = newPage
  fetchMoments()
}

// 格式化日期
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 初始加载
onMounted(() => {
  fetchMoments()
})
</script>