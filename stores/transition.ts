// stores/transition.ts
import { defineStore } from 'pinia'

export const useTransitionStore = defineStore('transition', {
  state: () => ({
    // default transition (if none is set)
    transitionName: 'slide-left'
  }),
  actions: {
    setTransition(direction: string) {
      // Set transition based on swipe direction
      if (direction === 'left') {
        this.transitionName = 'slide-left'
      } else if (direction === 'right') {
        this.transitionName = 'slide-right'
      } else if (direction === 'down') {
        this.transitionName = 'slide-down'
      } else if (direction === 'up') {
        this.transitionName = 'slide-up'
      }
    }
  }
})
