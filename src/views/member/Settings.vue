<template>
  <h1 class="font-bold text-gray-500">Settings</h1>
  <div class="grid grid-cols-3 gap-5 mt-3">
    <SettingsCard title="Name" action-label="Update">
      Kelvin Woo
    </SettingsCard>
    <SettingsCard title="Email" action-label="Update">
      kelvin.woo@gmail.com
    </SettingsCard>
    <SettingsCard title="Password" action-label="Update">
      *****
    </SettingsCard>
    <SettingsCard title="Notifications" action-label="Update">
      <div><CheckCircleIcon class="h-5 w-5 text-green-500 inline-block mr-2"/> Emails</div>
      <div><CheckCircleIcon class="h-5 w-5 text-green-500 inline-block mr-2"/> Text</div>
    </SettingsCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CheckCircleIcon } from '@heroicons/vue/solid';
import Btn from '@/components/Btn.vue';
import Card from '@/components/Card.vue';
import SettingsCard from './SettingsCard.vue';

export default defineComponent({
  name: 'Settings',
  components:{ 
    Btn,
    Card,
    SettingsCard,
    CheckCircleIcon,
  }
})
</script>

<style>
input{ 
  display:block;
  padding: 0.25em;
}
</style>
