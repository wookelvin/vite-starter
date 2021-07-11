<template>
  <div class="container p-2 mx-auto text-center h-full flex items-center justify-center">
    <div>
      <h1 class="text-8xl">
        404
      </h1>
      <div class="text-3xl">
        Not Found
      </div>
      <p class="mt-3">
        Whoops! Looks like we couldn't find the path you were looking for.
      </p>
      <div class="mt-5">
        <Btn to="/">
          Go Home
        </Btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Btn from '@/components/Btn.vue';

export default defineComponent({
  name: 'NotFound',
  components:{
    Btn,
  },
  setup: () => {
    // const count = ref(0)
    // return { count }
  }
})
</script>

<style scoped>
</style>
