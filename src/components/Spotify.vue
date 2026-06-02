<script setup lang="ts">
import { onMounted } from 'vue'
import { SpotifyLogo } from '../logics/logo'
import { getNowPlaying } from '../logics/spotifyAPI'
import PlayingAnimation from './Animation.vue'

const spotifyLogo = SpotifyLogo()
const nowPlaying = ref<any>(null)

onMounted(async () => {
  nowPlaying.value = await getNowPlaying()
})
</script>

<template>
  <div class="now-playing-container">
    <div class="header">
      <div class="spotify-logo" v-html="spotifyLogo" />
      <span class="text-zinc1">I'm currently listening to:</span>
    </div>
    <div v-if="nowPlaying" class="now-playing-box" :href="nowPlaying.songUrl" target="_blank">
      <img :src="nowPlaying.albumImageUrl" alt="Album cover" class="album-cover">
      <div class="track-info">
        <div class="track-title">
          <PlayingAnimation class="animation-bars" />
          <span>{{ nowPlaying.title }}</span>
        </div>
        <div class="track-artist">
          {{ nowPlaying.artist }}
        </div>
      </div>
    </div>
    <div v-else class="now-playing-box">
      <div class="track-info" style="padding: 0.75rem 0.5rem;">
        <div class="track-title">
          <PlayingAnimation class="animation-bars" />
          <span>Nothing right now 🎵 💤</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.now-playing-container {
  background-color: transparent !important;
  color: white;
  font-family: 'Inter', sans-serif;
  width: fit-content;
  border-radius: 12px;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-weight: 500;
  color: #1ed760;
  font-size: 0.9rem;
}

.spotify-logo {
  width: 18px;
  height: 18px;
  margin-right: 0.55rem;
}

.now-playing-box {
  background-color: transparent !important;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  padding-right: 5rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.album-cover {
  width: 48px;
  height: 48px;
  border-radius: 6px;
  margin-right: 10px;
  flex-shrink: 0;
}

.track-info {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.track-title {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: white;
  font-size: 0.95rem;
  line-height: 1.2;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.animation-bars {
  width: 14px;
  height: 14px;
  margin-right: 5px;
  flex-shrink: 0;
}

.track-artist {
  color: #bbbbbb;
  font-size: 0.75rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
img {
  margin-top: 0rem;
  margin-bottom: 0rem;
}
</style>
