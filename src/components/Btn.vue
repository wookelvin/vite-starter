<template>
  <router-link
    v-if="to"
    :to="to"
    class="ignore py-2 px-3 rounded transition"
    :class="classes"
  >
    <slot />
  </router-link>
  <button
    v-else
    class="block py-2 px-3 rounded"
    :class="classes"
    :type="type"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Btn',
  
  props: {
    to: {
      type: String,
      default: ''
    }, 
    outline: { 
      type: Boolean, 
      default: false
    }, 
    type: { 
      type: String, 
      default: 'button'
    },
    variant:{ 
      type: String, 
      default: 'primary'
    }
  },
  setup: (props) => {

    const classes = computed(() => { 
      if (props.variant === 'light'){
        return 'bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900';
      }else{ 
        return 'bg-blue-700 hover:bg-blue-600 text-white hover:text-white';
      }
    });

    return { classes }
  }
})
</script>

<style lang="postcss" scoped>
a,button{
  display: inline-block !default;
  text-align: center;
}
a:hover, button:hover{ 
  text-decoration: none;
}
</style>
