<template>
  <div class="py-4">
    <div class="container mx-auto px-2">
      <div class="flex justify-between items-center">
        <router-link
          to="/"
          class="ignore"
        >
          <site-logo />
        </router-link>
        <div>
          <site-nav-item to="/sign-in">
            Sign In
          </site-nav-item>
        </div>
      </div>
    </div>
  </div>
  
  <router-view />
  <div class="text-xs text-gray-400 mt-3 text-center py-2 bg-gray-700">
    &copy; Copyright {{ (new Date()).getFullYear() }}. rsvp.com. All rights reserved.
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
