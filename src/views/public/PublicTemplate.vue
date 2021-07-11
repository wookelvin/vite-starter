<template>
  <div class="py-4">
    <div class="container mx-auto px-2">
      <div class="flex justify-between items-center">
        <a href="/">
          <site-logo />
        </a>
        <div>
          <site-nav-item to="/sign-in">
            Sign In
          </site-nav-item>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto px-2 mt-3">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SiteNavItem from '@/components/SiteNavItem.vue';
import SiteLogo from '@/components/SiteLogo.vue';

export default defineComponent({
  name: 'PublicTemplate',
  components: {
    SiteNavItem,
    SiteLogo,
  }
})
</script>

<style>
</style>
