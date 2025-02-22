<template>
  <div class="page-wrapper relative h-full">
    <transition :name="transitionName" mode="in-out">
      <NuxtPage :key="$route.fullPath" class="absolute inset-0" />
    </transition>
  </div>
</template>

  
  
  <script setup>
  import { computed } from 'vue'
  import { useTransitionStore } from '@/stores/transition'
  
  const transitionStore = useTransitionStore()
  const transitionName = computed(() => transitionStore.transitionName)
  </script>
  
  <style scoped>
  .page-wrapper {
    position: relative;
    height: 100vh; /* Ensure full viewport height */
    background: inherit; /* Inherit your global background (or set it here) */
  }
  
  /* Slide Left Transition */
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: transform 0.5s ease;
  }
  .slide-left-enter-from {
    transform: translateX(100%);
  }
  .slide-left-leave-to {
    transform: translateX(-100%);
  }
  
  /* Slide Right Transition */
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: transform 0.5s ease;
  }
  .slide-right-enter-from {
    transform: translateX(-100%);
  }
  .slide-right-leave-to {
    transform: translateX(100%);
  }
  
  /* Slide Up Transition */
  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: transform 0.5s ease;
  }
  .slide-up-enter-from {
    transform: translateY(100%);
  }
  .slide-up-leave-to {
    transform: translateY(-100%);
  }
  
  /* Slide Down Transition */
  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: transform 0.5s ease;
  }
  .slide-down-enter-from {
    transform: translateY(-100%);
  }
  .slide-down-leave-to {
    transform: translateY(100%);
  }
  </style>
  