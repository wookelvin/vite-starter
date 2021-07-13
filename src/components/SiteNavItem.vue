<template>
  <router-link
    :to="to"
    class="ignore ml-3 text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-3 rounded transition text-sm"
  >
    <slot />
  </router-link>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'SiteNavItem',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup: () => {
    // const count = ref(0)
    // return { count }
  }
})
</script>

<style scoped>
</style>
