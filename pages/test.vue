<template>
    <div class="relative w-screen h-screen flex justify-center items-start bg-[#333] overflow-hidden">
      <!-- SFONDO -->
      <img
        src="/background-smoke.png"
        alt="Background Smoke"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
  
      <!-- Linea 1 -->
      <div class="mt-[80vh] w-[430px] h-[14px] bg-white z-20"></div>
  
      <!-- Linea 2 -->
      <div
        class="absolute bg-white w-[14px] h-[140px] z-[21]"
        :style="{
          bottom: 'calc(20vh)',
          left: 'calc(50% + 430px / 2 - 14px)'
        }"
      ></div>
  
      <!-- Linea 3 -->
      <div
        class="absolute bg-white w-[14px] h-[500px] z-10"
        :style="{
          bottom: 'calc(20vh + 140px)',
          left: 'calc(50% + 430px / 2 - 14px)'
        }"
      ></div>
  
      <!-- Linea 4 -->
      <div
        class="absolute bg-white w-[430px] h-[14px] z-[11]"
        :style="{
          bottom: 'calc(20vh + 640px)',
          left: '50%',
          transform: 'translateX(-50%)'
        }"
      ></div>
  
      <!-- Scritta verticale -->
      <div
        class="absolute text-white font-[Jost] text-[94px] font-bold leading-none origin-top-left z-30"
        :style="{
          top: 'calc(80vh)',
          left: 'calc(50% - 228px)',
          transform: 'rotate(-90deg)'
        }"
      >
        <span>HYPERF</span><span class="text-transparent">O</span><span>CUS</span>
      </div>
  
      <!-- Logo -->
      <img
        src="/logo-hyperfocus.png"
        alt="Logo Hyperfocus"
        class="absolute w-[150px] h-auto z-[31]"
        :style="{
          top: 'calc(80vh - 458px)',
          left: 'calc(50% - 257px)'
        }"
      />

      <!-- Camera centrata -->
      <img
  src="/camera.png"
  alt="Camera"
  class="absolute w-[780px] h-auto z-[19]"
  :style="{
    top: 'calc(50% - 50px)',
    left: 'calc(50% + 10px)',
    transform: 'translate(-50%, -50%)'
  }"
/>

<!-- Scritta sopra Linea 4 -->
<div
  class="absolute text-white font-[Jost] text-[43px] font-medium text-center z-30"
  :style="{
    bottom: 'calc(20vh + 640px + 10px)',
    left: '50%',
    transform: 'translateX(-50%)'
  }"
>
  SOLUZIONI CREATIVE
</div>

<!-- Scritte in basso -->
<div
  class="absolute text-white font-[Jost] text-[24px] font-light leading-snug text-center z-30"
  :style="{
    bottom: 'calc(20vh - 70px)',
    left: '50%',
    transform: 'translateX(-50%)'
  }"
>
  <span class="">SCOPRI I   </span>
  <span class="text-[32px] font-medium">NOSTRI SERVIZI</span>
</div>

<!-- Freccina saltellante -->
<img
  src="/polygon-icon.svg"
  alt="Scroll Down Icon"
  class="absolute w-[32px] h-auto z-30 animate-bounce"
  :style="{
    bottom: '10vh',
    left: '50%',
    transform: 'translateX(-50%)'
  }"
/>
</div>


<!-- DEBUG COUNTER -->
<div
  class="fixed top-5 left-5 bg-black/70 text-white text-sm p-2 rounded z-50 font-mono"
>
  Scroll: {{ scrollPercent.toFixed(1) }}%<br />
  {{ scrollPercent > 25 ? '✅ Superato 25%' : '⬆️ Sotto 25%' }}
</div>



    <!-- DEBUG: Forza altezza della pagina -->
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
  handleScroll() // inizializza subito
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
