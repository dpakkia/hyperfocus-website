<template>
  <div class="relative w-screen min-h-[300vh] bg-[#333] overflow-hidden">
    <!-- SFONDO FISSO -->
    <img
      src="/background-smoke.png"
      alt="Background Smoke"
      class="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
    />

    <!-- SEZIONE 1: Contenuto iniziale -->
    <div
      class="fixed inset-0 flex justify-center items-center z-30 transition-transform duration-500 ease-out"
      :class="scrollPercent > 25 ? '-translate-y-[100vh]' : 'translate-y-0'"
    >
      <div class="flex flex-col items-center text-white text-center font-[Jost]">
        <h1 class="text-8xl font-bold tracking-widest">HYPERFOCUS</h1>
        <p class="text-3xl font-light mt-2">SOLUZIONI CREATIVE</p>

        <!-- CONTATTI -->
        <div class="flex gap-6 mt-6">
          <a href="https://instagram.com" target="_blank" rel="noopener" class="transition-transform duration-300 transform hover:scale-110 group">
            <img src="/instagram.svg" alt="Instagram" class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="transition-transform duration-300 transform hover:scale-110 group">
            <img src="/linkedin.svg" alt="LinkedIn" class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150" />
          </a>
          <a href="mailto:info@hyperfocus.it" class="transition-transform duration-300 transform hover:scale-110 group">
            <img src="/mail.svg" alt="Email" class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150" />
          </a>
          <a href="https://wa.me/3703016677" target="_blank" rel="noopener" class="transition-transform duration-300 transform hover:scale-110 group">
            <img src="/whatsapp.svg" alt="WhatsApp" class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150" />
          </a>
        </div>

        <!-- FRECCINA -->
        <img
          src="/polygon-icon.svg"
          alt="Scroll Down Icon"
          class="w-[32px] h-auto mt-10 animate-bounce"
        />
      </div>
    </div>

<!-- SEZIONE 2: Rettangolo arancione CON CONTENUTO -->
<div
  v-if="scrollPercent > 25"
  class="fixed z-40 animate-snappyFadeIn text-white font-[Jost] font-medium"
  :style="{
    top: '6%',
    left: 'calc(0vw + 3%)',
    width: 'calc(25vw - 6%)',
    height: 'calc(100vh - 12%)',
    background: 'linear-gradient(to bottom, #AC6040, transparent)'
  }"
>
  <div class="relative w-full h-full">
    <!-- Testo ruotato -->
    <div class="absolute left-2 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-left text-sm tracking-wide">
      STRATEGIA E CONTENUTI PER SOCIAL NETWORK
    </div>

    <!-- Immagine -->
    <img
      src="/4C05C701-632D-4AFA-93AC-711085894571.png"
      alt="Visual"
      class="absolute right-2 top-1/2 -translate-y-1/2 max-w-[80%] h-auto"
    />
  </div>
</div>

<!-- SEZIONE 2: Rettangolo blu -->
<div
  v-if="scrollPercent > 25"
  class="fixed z-40 animate-snappyFadeIn"
  :style="{
    top: '6%',
    left: 'calc(25vw + 3%)',
    width: 'calc(25vw - 6%)',
    height: 'calc(100vh - 12%)',
    background: 'linear-gradient(to bottom, #657186, transparent)'
  }"
/>

<!-- SEZIONE 2: Rettangolo grigio -->
<div
  v-if="scrollPercent > 25"
  class="fixed z-40 animate-snappyFadeIn"
  :style="{
    top: '6%',
    left: 'calc(50vw + 3%)',
    width: 'calc(25vw - 6%)',
    height: 'calc(100vh - 12%)',
    background: 'linear-gradient(to bottom, #686C79, transparent)'
  }"
/>

<!-- SEZIONE 2: Rettangolo rosso -->
<div
  v-if="scrollPercent > 25"
  class="fixed z-40 animate-snappyFadeIn"
  :style="{
    top: '6%',
    left: 'calc(75vw + 3%)',
    width: 'calc(25vw - 6%)',
    height: 'calc(100vh - 12%)',
    background: 'linear-gradient(to bottom, #C33931, transparent)'
  }"
/>

    <!-- DEBUG SCROLL -->
    <div class="fixed top-5 left-5 bg-black/70 text-white text-sm p-2 rounded z-50 font-mono">
      Scroll: {{ scrollPercent.toFixed(1) }}%<br />
      {{ scrollPercent > 25 ? '✅ Superato 25%' : '⬆️ Sotto 25%' }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrollPercent = ref(0)

const handleScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrolled = (scrollTop / docHeight) * 100
  scrollPercent.value = scrolled
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes snappyFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-snappyFadeIn {
  animation: snappyFadeIn 0.3s ease-out forwards;
  backface-visibility: hidden;
  will-change: opacity, transform;
}

/* Prevenzione del bianco visibile dietro */
html, body {
  margin: 0;
  padding: 0;
  background-color: #333;
  overflow-x: hidden;
}
</style>