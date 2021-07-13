<template>
  <div class="bg-blue-50 flex-1">
    <div class="container mx-auto px-2 mt-3">
      <div class="flex items-center wrapper ">
        <div class="">
          <div class="text-6xl mb-10 font-serif">
            <p class="text-6xl">
              Easy &amp; Simplified invites.
            </p>
            <p class="text-4xl">
              Get started <span class="bg-yellow-300 p-2">today</span>.
            </p>
          </div>
          <Btn
            class="text-xl p-4 mr-2"
            to="/sign-up"
          >
            Sign Up
          </Btn>
          <Btn
            class="text-xl p-4"
            to="/sign-in"
            :outline="true"
          >
            Sign In
          </Btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Btn from '@/components/Btn.vue';

export default defineComponent({
  name: 'Home',
  components:{
    Btn
  }
})
</script>

<style lang="postcss" scoped>
.wrapper{ 
  height:80vh;
}
.text-6xl{ 
  line-height:1.25em;
}
</style>
