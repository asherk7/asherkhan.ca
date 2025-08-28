<script setup lang="ts">
import { experience } from '../../data/experience'
import { formatDate } from '../logics'

function getSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-')
}
</script>

<template>
  <div>
    <template v-for="(job, idx) in experience" :key="idx">
      <div v-if="idx !== 0" class="pt-4" />

      <h2 :id="getSlug(job.title)" tabindex="-1" class="mb-0" :style="{ marginBottom: '0.3rem' }">
        {{ job.title }} @ {{ job.company }}
      </h2>

      <div class="text-sm opacity-75 pt-1">
        <span v-if="job.location" class="text-zinc6">
          {{ job.location }}
        </span>
        <span v-if="job.location" class="text-zinc6"> • </span>
        <span v-if="job.type" class="text-zinc6">
          {{ job.type }}
        </span>
      </div>

      <div class="text-sm opacity-75 pt-1">
        {{ formatDate(job.start) }} – {{ formatDate(job.end) }}
      </div>

      <ul class="list-disc ml-5 mt-2 space-y-1 text-zinc5">
        <li v-if="job.point1">
          {{ job.point1 }}
        </li>
      </ul>
    </template>
    <div class="prose m-auto mt-8 mb-8 slide-enter animate-delay-500 print:hidden">
      <br>
      <span font-mono op50>> </span>
      <a href="/" class="font-mono op50 hover:op75">cd ..</a>
    </div>
  </div>
</template>
