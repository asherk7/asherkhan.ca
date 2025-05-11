<script setup lang="ts">
</script>

<template>
  <div class="playing-animation">
    <span />
    <span class="delay1" />
    <span class="delay2" />
  </div>
</template>

<style scoped>
.playing-animation {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 13px;
  height: 13px;
}

.playing-animation span {
  width: 3px;
  height: 100%;
  background-color: #1ed760;
  border-radius: 3px;
  animation: playingAnimation 2.2s ease infinite alternate;
  transform-origin: bottom;
}

.playing-animation .delay1 {
  animation-delay: -2.2s;
}

.playing-animation .delay2 {
  animation-delay: -3.7s;
}

@keyframes playingAnimation {
  10% {
    transform: scaleY(0.3);
  }
  30% {
    transform: scaleY(1);
  }
  60% {
    transform: scaleY(0.5);
  }
  80% {
    transform: scaleY(0.75);
  }
  100% {
    transform: scaleY(0.5);
  }
}
</style>
