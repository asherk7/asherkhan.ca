<script setup lang="ts">
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const { y: scroll } = useWindowScroll()
</script>

<template>
  <header class="header z-40">
    <RouterLink
      class="w-12 h-12 absolute xl:fixed m-5 select-none outline-none"
      to="/"
      focusable="false"
    >
      <Logo />
    </RouterLink>
    <button
      title="Scroll to top"
      fixed right-3 bottom-3 w-10 h-10 hover:op100 rounded-full
      hover-bg-hex-8883 transition duration-300 z-100 print:hidden
      :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'"
      @click="toTop()"
    >
      <div i-ri-arrow-up-line />
    </button>
    <nav class="nav">
      <div class="spacer" />
      <div class="right" print:op0>
        <RouterLink to="/" title="Home">
          <span class="lt-md:hidden">Home</span>
          <div i-ri-home-line class="md:hidden" />
        </RouterLink>
        <RouterLink to="/experience" title="Experience">
          <span class="lt-md:hidden">Experience</span>
          <div i-ri-briefcase-line class="md:hidden" />
        </RouterLink>
        <a href="https://www.linkedin.com/in/asher-khan13/" target="_blank" title="LinkedIn" class="lt-md:hidden">
          <div i-ri-linkedin-line />
        </a>
        <a href="https://www.github.com/asherk7" target="_blank" title="GitHub" class="lt-md:hidden">
          <div i-uil-github-alt />
        </a>
        <a href="../../public/Asher_Khan_Resume.pdf" target="_blank" title="Resume" class="lt-md:hidden">
          <div i-ri-file-text-line />
        </a>
        <a href="https://www.instagram.com/_asher.kh/" target="_blank" title="Instagram" class="lt-md:hidden">
          <div i-ri-instagram-line />
        </a>
        <a href="https://open.spotify.com/user/22cjx7umpkdnqnmjnk37n642q?si=bee38c5579cd486e" target="_blank" title="Spotify" class="lt-md:hidden">
          <div i-ri-spotify-line />
        </a>
        <ToggleTheme />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
