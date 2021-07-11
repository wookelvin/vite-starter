<template>
  <div class="bg-gray-200 py-2">
    <div class="container mx-auto px-2">
      <div class="flex justify-between items-center">
        <site-logo />
        <div> 
          <site-nav-item to="/">
            Home
          </site-nav-item>
          <site-nav-item to="/about">
            About
          </site-nav-item>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-2">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SiteNavItem from '@/components/SiteNavItem.vue';
import SiteLogo from '@/components/SiteLogo.vue';

export default defineComponent({
  name: 'App',
  components: {
    SiteNavItem,
    SiteLogo,
  }
})
</script>

<style>
</style>
