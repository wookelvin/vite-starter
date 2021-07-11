<template>
  <div class="p-3 bg-red-200 rounded flex items-center text-gray-800">
    <ExclamationIcon class="h-5 w-5 mr-2 text-red-900" /> 
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { ExclamationIcon } from '@heroicons/vue/solid';
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Alert',
  components:{
    ExclamationIcon,
  },
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
