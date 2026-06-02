<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <div class="mt-10 mb-6 prose m-auto flex slide-enter animate-delay-1200!">
    <span class="text-sm op50"> © {{ year }} MIT Licensed</span>
    <div class="flex-auto" />
  </div>
</template>
