export const config = {
  site: {
    title: "Elvis's Blog",
    name: "Elvis's Blog",
    description: "Elvis's Blog",
    keywords: ["Elvis's Blog", "AI", "Full Stack Developer"],
    url: "https://elvix.cn",
    baseUrl: "https://elvix.cn",
    image: "https://xxx.com/og-image.png",
    favicon: {
      ico: "/favicon.ico",
      png: "/favicon.png",
      svg: "/favicon.svg",
      appleTouchIcon: "/favicon.png",
    },
    manifest: "/site.webmanifest",
    rss: {
      title: "Elvis's Blog",
      description: "Thoughts on Full-stack development, AI",
      feedLinks: {
        rss2: "/rss.xml",
        json: "/feed.json",
        atom: "/atom.xml",
      },
    },
  },
  author: {
    name: "Elvis",
    email: "llwxi@qq.com",
    bio: "Hello, I'm Elvis. A front-end engineer.",
  },
  social: {
    github: "https://github.com/l123wx",
    // x: "https://x.com/xxx",
    // xiaohongshu: "https://www.xiaohongshu.com/user/profile/xxx",
    // wechat: "https://storage.xxx.com/images/wechat-official-account.png",
    // buyMeACoffee: "https://www.buymeacoffee.com/xxx",
  },
  giscus: {
    repo: "guangzhengli/hugo-ladder-exampleSite",
    repoId: "R_kgDOHyVOjg",
    categoryId: "DIC_kwDOHyVOjs4CQsH7",
  },
  navigation: {
    main: [
      { 
        title: "文章",
        href: "/blog",
      },
    ],
  },
  seo: {
    metadataBase: new URL("https://elvix.cn"),
    alternates: {
      canonical: './',
    },
    openGraph: {
      type: "website" as const,
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image" as const,
      creator: "@xxx",
    },
  },
};
