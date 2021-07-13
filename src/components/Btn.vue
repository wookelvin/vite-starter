<template>
  <router-link
    :to="to"
    class="ignore p-2 transition"
    :class="classes"
  >
    <slot />
  </router-link>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'Btn',
  props: {
    to: {
      type: String,
      default: '#'
    }, 
    outline: { 
      type: Boolean, 
      default: false
    }
  },
  setup: (props) => {

    const classes = computed(() => {
      if (!props.outline) {
        return 'bg-blue-700 text-white rounded hover:bg-blue-600 hover:text-white';
      }else{ 
        return 'border-2 border-blue-700 text-blue-700 rounded hover:bg-blue-600  hover:text-white';
      }
    })
    // const count = ref(0)
    return { classes }
  }
})
</script>

<style lang="postcss" scoped>
a{
  display: inline-block !default;
  text-align: center;
}
a:hover{ 
  text-decoration: none;
}
</style>
