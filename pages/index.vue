<template>
  <SwipeDetector @swipeleft="handleSwipeLeft" @swiperight="handleSwipeRight" @swipedown="handleSwipeDown"
    @swipeup="handleSwipeUp">
    <div
      class="h-screen flex flex-col items-center justify-between bg-gradient-to-b from-[#06142b] to-black px-6 py-10">
      <!-- Logo -->
      <div class="mt-20">
        <AnimatedLogo class="w-32 h-32 md:w-128" />
      </div>

      <h1
        class="fixed top-[280px] left-1/2 transform -translate-x-1/2 text-white text-5xl lg:text-6xl md:text-6xl font-medium font-[Jost] text-center">
        HYPERFOCUS
      </h1>


      <!-- Swipe Instructions -->
      <div class="flex justify-between items-center w-full max-w-xs">
        <div class="flex flex-col items-center">
          <font-awesome-icon :icon="faArrowLeft" class="text-white text-2xl" />
          <span class="text-white text-sm mt-2">Swipe Left</span>
        </div>

        <div class="flex flex-col items-center">
          <font-awesome-icon :icon="faArrowRight" class="text-white text-2xl" />
          <span class="text-white text-sm mt-2">Swipe Right</span>
        </div>
      </div>

      <!-- Swipe Down -->
      <div class="flex flex-col items-center mb-10">
        <span class="text-white text-sm">Swipe Down</span>
        <font-awesome-icon :icon="faArrowDown" class="text-white text-2xl mt-2" />
      </div>
    </div>
  </SwipeDetector>
</template>

<script setup>
import SwipeDetector from '@/components/SwipeDetector.vue';
import { useTransitionStore } from '@/stores/transition'
import AnimatedLogo from "@/components/AnimatedLogo.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft, faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'vue-router'
import { setActivePinia, createPinia } from 'pinia'

setActivePinia(createPinia())

const router = useRouter()
const transitionStore = useTransitionStore()

function handleSwipeLeft() {
  transitionStore.setTransition('left')
  router.push('/page-left')
}

function handleSwipeRight() {
  transitionStore.setTransition('right')
  router.push('/page-right')
}

function handleSwipeDown() {
  transitionStore.setTransition('down')
  router.push('/page-down')
}

function handleSwipeUp() {
  transitionStore.setTransition('up')
  router.push('/page-up')
}
</script>
