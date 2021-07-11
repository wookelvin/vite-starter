<template>
  <div class="bg-gray-100 h-full">
    <div class="container p-2 mx-auto h-full flex items-center justify-center ">
      <div class="max-w-xs w-full">
        <div class="text-center py-2">
          <site-logo />
        </div>
        <Card>
          <router-view />
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SiteLogo from '../../components/SiteLogo.vue';
import Card from '../../components/Card.vue';

export default defineComponent({
  components: { 
    SiteLogo, 
    Card 
  },
  name: 'SignInTemplate',
})
</script>

<style>
input{ 
  display:block;
  padding: 0.25em;
}
</style>
