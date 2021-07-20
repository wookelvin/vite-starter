<template>
  <router-link 
    :to="to" 
    class="text-gray-500 hover:text-gray-300 ignore py-3 my-2 -mx-3 px-3 rounded 
    flex items-center member-nav-item"
    exact-active-class="active"
  >
    <slot />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavItem',
  props:{ 
    to:{ 
      type: String, 
      required: true
    }
  }
})
</script>

<style lang="postcss">
.member-nav-item svg{ 
  @apply h-5 w-5 mr-4 text-gray-500;
}
.member-nav-item:hover svg{ 
  @apply text-gray-300;
}
.member-nav-item.active{
  @apply text-gray-200 bg-gray-800;
}

.member-nav-item.active svg{
  @apply text-gray-200;
}
</style>
