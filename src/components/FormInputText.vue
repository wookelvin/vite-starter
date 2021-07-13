<template>
  <label class="mt-3 block relative">
    <div
      v-if="l"
      class="text-xs text-gray-700 bg-white px-2 absolute -top-2 left-1"
    >{{ l }}</div>
    <input
      type="text"
      class="block border border-gray-300 p-2 bg-white focus:border-blue-300 w-full"
    >
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FormInputText',
  props:{
    l:{ 
      type: String, 
      default: '',
    }
  },
  setup: () => {
    // const count = ref(0)
    // return { count }
  }
})
</script>

<style lang="postcss" scoped>

</style>
