<script setup lang="ts">
import { education } from '../../data/education'
import { formatDate } from '../logics'

function getSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-')
}
</script>

<template>
  <div>
    <template v-for="(edu, idx) in education" :key="idx">
      <div v-if="idx !== 0" class="pt-4" />

      <h2 :id="getSlug(edu.school)" tabindex="-1" class="mb-0" :style="{ marginBottom: '0.3rem' }">
        {{ edu.degree }}
      </h2>

      <div class="text-sm opacity-75 pt-1">
        {{ edu.school }} <br>
        {{ formatDate(edu.start) }} – {{ formatDate(edu.end) }}
      </div>

      <div class="mt-2 text-zinc6">
        <p v-if="edu.achievements">
          <strong>Achievements:</strong> {{ edu.achievements }}
        </p>
        <p v-if="edu.activities" class="mt-1">
          <strong>Activities:</strong> {{ edu.activities }}
        </p>
      </div>
    </template>
    <div class="prose m-auto mt-8 mb-8 slide-enter animate-delay-500 print:hidden">
      <br>
      <span font-mono op50>> </span>
      <a href="/" class="font-mono op50 hover:op75">cd ..</a>
    </div>
  </div>
</template>

<style scoped>
h2.header-anchor {
  margin-left: 0.5rem;
  opacity: 0.3;
  transition: opacity 0.2s;
}
h2:hover .header-anchor {
  opacity: 1;
}
</style>
