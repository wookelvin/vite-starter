<template>
  <div class="card rounded p-5 border rounded-lg bg-white">
    <slot />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    //msg: {
    //  type: String,
    //  required: true
    //}
  },
  setup: () => {
    // const count = ref(0)
    // return { count }
  }
})
</script>

<style scoped>
</style>
