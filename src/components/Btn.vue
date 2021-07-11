<template>
  <router-link
    :to="to"
    class="p-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition"
  >
    <slot />
  </router-link>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Btn',
  props: {
    to: {
      type: String,
      default: '#'
    } 
  },
  setup: () => {
    // const count = ref(0)
    // return { count }
  }
})
</script>

<style lang="postcss" scoped>
a{
  display: inline-block !default;
  text-align: center;
}
</style>
