<template>
   <div class="relative w-screen min-h-[300vh] bg-[#333] overflow-hidden">
      <img
         src="/background-smoke.png"
         alt="Background Smoke"
         class="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none" />

      <div
         class="fixed inset-0 flex justify-center items-center z-30 transition-transform duration-500 ease-out"
         :class="scrollPercent > 25 ? '-translate-y-[100vh]' : 'translate-y-0'">
         <div class="flex flex-col items-center text-white text-center font-[Jost]">
            <h1 class="text-8xl font-bold tracking-widest">HYPERFOCUS</h1>
            <p class="text-3xl font-light mt-2">SOLUZIONI CREATIVE</p>

            <div class="flex gap-6 mt-6">
               <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener"
                  class="transition-transform duration-300 transform hover:scale-110 group">
                  <img
                     src="/instagram.svg"
                     alt="Instagram"
                     class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150" />
               </a>
               <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener"
                  class="transition-transform duration-300 transform hover:scale-110 group">
                  <img
                     src="/linkedin.svg"
                     alt="LinkedIn"
                     class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150" />
               </a>
               <a
                  href="mailto:info@hyperfocus.it"
                  class="transition-transform duration-300 transform hover:scale-110 group">
                  <img
                     src="/mail.svg"
                     alt="Email"
                     class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150" />
               </a>
               <a
                  href="https://wa.me/3703016677"
                  target="_blank"
                  rel="noopener"
                  class="transition-transform duration-300 transform hover:scale-110 group">
                  <img
                     src="/whatsapp.svg"
                     alt="WhatsApp"
                     class="w-10 h-10 transition-colors duration-300 group-hover:brightness-150" />
               </a>
            </div>

            <img
               src="/polygon-icon.svg"
               alt="Scroll Down Icon"
               class="w-[32px] h-auto mt-10 animate-bounce" />
         </div>
      </div>

      <!-- SEZIONE Rettangolo arancione CON CONTENUTO - DA MODIFICARE -->
      <!-- XLEDDYL: ho messo il background con le classi tailwind "bg-gradient-to-b" "from-XXX" "to-XXX" -->
      <!-- XLEDDYL: messo "flex" "items-center" "justify-center" così che gli elementi siamo posizionati al centro del rettangolo -->
      <!-- XLEDDYL: testo poi messo in absolute così che lo possiamo regolare liberamente dentro al rettangolo (non serviva un altro wrapper con relative perche qualsiasi position si comporta come relative tranne fixed che fa riferimento sempre alla window) -->
      <!-- XLEDDYL: es. se ho un container absolute e un figlio absolute, il figlio sarà absolute al padre, in pratica absolute è relativo al primo position impostato, qualiasi esso sia. relative lo si assegna per dire "QUI" e senza applicare position strane. non so se mi sono spiegato ahahhahaha -->
      <div
         v-if="scrollPercent > 25"
         class="fixed flex z-40 animate-snappyFadeIn text-white font-[Jost] font-medium justify-center item-center bg-gradient-to-b from-[#AC6040] to-transparent"
         :style="{
            top: '6%',
            left: 'calc(0vw + 3%)',
            width: 'calc(25vw - 6%)',
            height: 'calc(100vh - 12%)',
         }">
         <!-- XLEDDYL: semplificato il posizionamento -->
         <div
            class="absolute top-2 left-11 origin-top-left rotate-90 md:text-3xl lg:text-4xl tracking-wide whitespace-nowrap text-right">
            STRATEGIA E CONTENUTI PER SOCIAL NETWORK
         </div>
         <!-- XLEDDYL: qui non server una max-w perchè c'è già la dimensione del rettangolo che è fissa, basta mettere size-full così l'immagine si adatta -->
         <!-- XLEDDYL: trasformazioni/stili applicati al container dell'immagine che le img meglio non toccarle -->
         <!-- XLEDDYL: visto che il parent ci mette al centro del rettangolo con flex, ecc. noi semplicemente diciamo che voglioamo spostarci a dx del 20% della nostra dimensione -->
         <!-- XLEDDYL: non serve dare w o h a meno che tu non voglia limitare la dimensione dell'immagine in qualche modo.. ma in ogni caso è comunque limitata alla dimensione del rettangolo, visto che ha h e w settate a valori fissi -->
         <div class="translate-x-[20%]">
            <!-- XLEDDYL: size full sull'immagine così riempe il parent -->
            <img src="/camera.png" alt="Visual" class="size-full object-contain" />
         </div>
      </div>

      <!-- SEZIONE Rettangolo blu -->
      <div
         v-if="scrollPercent > 25"
         class="fixed z-40 animate-snappyFadeIn"
         :style="{
            top: '6%',
            left: 'calc(25vw + 3%)',
            width: 'calc(25vw - 6%)',
            height: 'calc(100vh - 12%)',
            background: 'linear-gradient(to bottom, #657186, transparent)',
         }" />

      <!-- SEZIONE Rettangolo grigio -->
      <div
         v-if="scrollPercent > 25"
         class="fixed z-40 animate-snappyFadeIn"
         :style="{
            top: '6%',
            left: 'calc(50vw + 3%)',
            width: 'calc(25vw - 6%)',
            height: 'calc(100vh - 12%)',
            background: 'linear-gradient(to bottom, #686C79, transparent)',
         }" />

      <!-- SEZIONE Rettangolo rosso -->
      <div
         v-if="scrollPercent > 25"
         class="fixed z-40 animate-snappyFadeIn"
         :style="{
            top: '6%',
            left: 'calc(75vw + 3%)',
            width: 'calc(25vw - 6%)',
            height: 'calc(100vh - 12%)',
            background: 'linear-gradient(to bottom, #C33931, transparent)',
         }" />

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
html,
body {
   margin: 0;
   padding: 0;
   background-color: #333;
   overflow-x: hidden;
}
</style>
