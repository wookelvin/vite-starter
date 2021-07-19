<template>
  <div class="relative" :class="{'opacity-40':show}">
    <slot></slot>
  </div>
  <transition name="fade">
    <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center" v-if="show">
      <BusyIcon class="z-10" color="white"/>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BusyIcon from './BusyIcon.vue'
export default defineComponent({
  components: { BusyIcon },
  name: 'HelloWorld',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
