<template>
  <div
    class="swipe-detector"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define the events that this component will emit.
const emit = defineEmits(['swipeleft', 'swiperight', 'swipedown', 'swipeup']);

// Refs to store touch coordinates.
const startX = ref(0);
const startY = ref(0);
const endX = ref(0);
const endY = ref(0);

// Define a threshold (in pixels) to consider as a swipe.
const threshold = 50;

function handleTouchStart(e) {
  const touch = e.touches[0];
  startX.value = touch.clientX;
  startY.value = touch.clientY;
}

function handleTouchEnd(e) {
  const touch = e.changedTouches[0];
  endX.value = touch.clientX;
  endY.value = touch.clientY;
  
  const deltaX = endX.value - startX.value;
  const deltaY = endY.value - startY.value;
  
  // Check whether the swipe is primarily horizontal or vertical.
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        emit('swiperight');
      } else {
        emit('swipeleft');
      }
    }
  } else {
    if (Math.abs(deltaY) > threshold) {
      if (deltaY > 0) {
        emit('swipedown');
      } else {
        emit('swipeup');
      }
    }
  }
}
</script>

<style scoped>
.swipe-detector {
  width: 100%;
  height: 100%;
}
</style>
