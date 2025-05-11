<script setup lang="ts">
import { onMounted, ref } from 'vue'

const username = 'asherk7'
const token = import.meta.env.VITE_GITHUB_TOKEN

const projects = ref<Record<string, any[]>>({})
const allowedTags = ['ML', 'SWE']

const slug = (str: string) => str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')

async function fetchRepos() {
  projects.value = {}
  const headers: HeadersInit = token
    ? { Authorization: `token ${token}` }
    : {}

  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers,
  })

  const repos = await res.json()

  const enrichedRepos = await Promise.all(
    repos.map(async (repo: any) => {
      const topicRes = await fetch(
        `https://api.github.com/repos/${username}/${repo.name}/topics`,
        {
          headers: {
            Accept: 'application/vnd.github.mercy-preview+json',
            ...headers,
          },
        },
      )

      const topicData = await topicRes.json()
      return {
        ...repo,
        topics: topicData.names || [],
      }
    }),
  )

  enrichedRepos.forEach((repo: any) => {
    repo.topics.forEach((topic: string) => {
      if (allowedTags.includes(topic.toUpperCase())) {
        if (!projects.value[topic]) {
          projects.value[topic] = []
        }
        projects.value[topic].push({
          name: repo.name,
          desc: repo.description || 'No description available',
          link: repo.html_url,
          icon: repo.name.includes('vue') ? 'vueuse' : '',
        })
      }
    })
  })
}

const sortedProjects = computed(() => {
  const sorted = Object.entries(projects.value).sort(([keyA], [keyB]) => {
    if (keyA === 'ML')
      return -1
    if (keyB === 'ML')
      return 1
    return keyA.localeCompare(keyB)
  })

  return sorted
})

onMounted(() => {
  fetchRepos()
})
</script>

<template>
  <div class="max-w-250 mx-auto">
    <p class="text-center mt--6 mb-5 op50 text-lg italic">
      Projects that I created or contributed to.
    </p>
    <div class="prose pb5 mx-auto mt10 text-center">
      <div flex="~ gap-2 justify-center">
        <a
          href="https://github.com/asherk7"
          target="_blank"
          class="group btn-blue inline-block"
        >
          <div
            class="i-ph-github-logo-duotone group-hover:i-ph-github-logo-fill text-blue"
          />
          GitHub
        </a>
      </div>
      <hr>
    </div>

    <div
      v-for="([key, repos], cidx) in sortedProjects"
      :key="key"
      class="mb-8"
      slide-enter
      :style="{ '--enter-stage': cidx + 1 }"
    >
      <div
        :id="slug(String(key))"
        select-none
        relative
        h18
        mt5
        pointer-events-none
        slide-enter
        :style="{ '--enter-stage': cidx - 2, '--enter-step': '60ms' }"
      >
        <span
          class="uppercase text-5em color-transparent absolute left--1rem top-0rem font-bold leading-1em text-stroke-1.5 text-stroke-hex-aaa op35 dark:op20"
        >
          {{ key }}
        </span>
      </div>

      <div
        class="project-grid py-2 max-w-250 w-max mx-auto"
        grid="~ cols-1 md:cols-2 gap-4 lg:cols-3"
      >
        <a
          v-for="(item, idx) in repos"
          :key="idx"
          class="item relative flex items-center"
          :href="item.link"
          target="_blank"
          :title="item.name"
        >
          <div class="flex-auto">
            <div class="text-normal">{{ item.name }}</div>
            <div class="desc text-sm opacity-50 font-normal" v-html="item.desc" />
          </div>
        </a>
      </div>
    </div>
    <div class="prose m-auto mt-8 mb-8 slide-enter animate-delay-500 print:hidden">
      <br>
      <span font-mono op50>> </span>
      <a href="/" class="font-mono op50 hover:op75">cd ..</a>
    </div>
  </div>
</template>

<style scoped>
.project-grid a.item {
  background: transparent;
  font-size: 1.1rem;
  width: 350px;
  max-width: 100%;
  padding: 0.5rem 0.875rem 0.875rem;
  border-radius: 6px;
}

.project-grid a.item:hover {
  background: #88888811;
}

.project-grid a.item {
  order: initial;
}

.project-grid a.item:first-of-type {
  order: -1;
}
</style>
