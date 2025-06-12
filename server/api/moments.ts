import { defineEventHandler, getQuery } from 'h3'

interface Discussion {
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  reactions: {
    total_count: number;
    '+1': number;
    '-1': number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
  };
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  
  // 获取分页参数，设置默认值
  const page = Number(query.page) || 1
  const pageSize = Number(query.pageSize) || 10
  
  try {
    const response = await fetch(
      `https://api.github.com/repos/${config.githubOwner}/${config.githubRepo}/discussions?per_page=${pageSize}&page=${page}`,
      {
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': `Bearer ${config.githubToken}`,
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    const discussions = await response.json() as Discussion[]
    
    // 过滤出 Moments 分类的讨论
    const moments = discussions
      .map(({ title, body, created_at, updated_at, reactions }) => ({
        title,
        body,
        created_at,
        updated_at,
        reactions
      }))

    // 获取总数据量（从响应头中获取）
    const totalCount = parseInt(response.headers.get('x-total-count') || '0', 10)

    return {
      success: true,
      data: moments,
      pagination: {
        page,
        pageSize,
        total: totalCount,
        totalPages: Math.ceil(totalCount / pageSize)
      }
    }
  } catch (error: unknown) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }
  }
})