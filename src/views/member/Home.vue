<template>
  <h1>Member Home</h1>
  <div class="mt-3">
    <Btn to="/sign-out">
      Sign Out
    </Btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Btn from '@/components/Btn.vue';

export default defineComponent({
  name: 'MemberHome',
  components:{ 
    Btn,
  }
})
</script>

<style>
input{ 
  display:block;
  padding: 0.25em;
}
</style>
