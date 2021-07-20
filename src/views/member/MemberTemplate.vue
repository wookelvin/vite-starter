<template>
  <div class="bg-gray-100 h-full">
    <div class="grid grid-cols-5 gap-4 h-full">
      <!-- nav -->
      <div class="px-10 bg-gray-900">
        <div class="py-5">
          <router-link
            class="ignore"
            to="/member"
          >
            <site-logo class="text-3xl text-white" />
          </router-link>
        </div>

        <div>
          <NavItem to="/member">
            <HomeIcon /> <div>Home</div>
          </NavItem>
          <NavItem to="/member/settings">
            <CogIcon /> <div>Settings</div>
          </NavItem>
          <NavItem to="/sign-out">
            <LogoutIcon />
            <div>Sign Out</div>
          </NavItem>
        </div>
      </div>
    
      <!-- main -->
      <div class="col-span-4 px-5 py-10">
        <router-view />
        <div class="text-xs text-gray-500 mt-3 text-center">
          &copy; Copyright {{ (new Date()).getFullYear() }}. rsvp.com. All rights reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { HomeIcon, CogIcon, LogoutIcon } from '@heroicons/vue/solid';
import { defineComponent } from 'vue';
import SiteLogo from '../../components/SiteLogo.vue';
import Card from '../../components/Card.vue';
import NavItem from './NavItem.vue';

export default defineComponent({
  components: { 
    SiteLogo, 
    Card, 
    NavItem,
    HomeIcon,
    CogIcon, 
    LogoutIcon,
  },
  name: 'MemberTemplate',
})
</script>

<style>
input{ 
  display:block;
  padding: 0.25em;
}
</style>
