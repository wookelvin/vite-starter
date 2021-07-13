<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
  }
})
</script>
<style lang="postcss">
html,body, #app{ 
  @apply h-full;
}

#app{ 
  display:flex;
  flex-direction: column;
}
</style>
