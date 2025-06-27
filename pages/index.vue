<template>
  <div class="relative w-screen h-screen flex justify-center items-center bg-[#333] overflow-hidden">
    <!-- SFONDO -->
    <img
      src="/background-smoke.png"
      alt="Background Smoke"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />

    <!-- CONTENUTO CENTRALE -->
    <div class="relative z-30 flex flex-col items-center text-white text-center font-[Jost] animate-fadeInUp">
      <h1 class="text-8xl font-bold tracking-widest">HYPERFOCUS</h1>
      <p class="text-3xl font-light mt-2">SOLUZIONI CREATIVE</p>

      <!-- CONTATTI -->
      <div class="flex gap-6 mt-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener"
          class="transition-transform duration-300 transform hover:scale-110 group"
        >
          <img
            src="/instagram.svg"
            alt="Instagram"
            class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150"
          />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener"
          class="transition-transform duration-300 transform hover:scale-110 group"
        >
          <img
            src="/linkedin.svg"
            alt="LinkedIn"
            class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150"
          />
        </a>

        <a
          href="mailto:info@hyperfocus.it"
          class="transition-transform duration-300 transform hover:scale-110 group"
        >
          <img
            src="/mail.svg"
            alt="Email"
            class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150"
          />
        </a>

        <a
          href="https://wa.me/3703016677" 
          target="_blank"
          rel="noopener"
          class="transition-transform duration-300 transform hover:scale-110 group"
        >
          <img
            src="/whatsapp.svg"
            alt="WhatsApp"
            class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150"
          />
        </a>
      </div>
    </div>

    <!-- FRECCINA SALTELLANTE -->
    <img
      src="/polygon-icon.svg"
      alt="Scroll Down Icon"
      class="absolute w-[32px] h-auto z-30 animate-bounce"
      :style="{ bottom: '10vh', left: '50%', transform: 'translateX(-50%)' }"
    />
  </div>

  <!-- DEBUG COUNTER -->
  <div class="fixed top-5 left-5 bg-black/70 text-white text-sm p-2 rounded z-50 font-mono">
    Scroll: {{ scrollPercent.toFixed(1) }}%<br />
    {{ scrollPercent > 25 ? '✅ Superato 25%' : '⬆️ Sotto 25%' }}
  </div>

  <!-- DEBUG: Forza altezza -->
  <div class="w-full h-[100vh]"></div>
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
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out both;
}
</style>