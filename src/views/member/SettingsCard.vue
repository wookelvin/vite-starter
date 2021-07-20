<template>
  <Card>
    <div class="flex justify-between items-center">
      <div>
        <h2 class="text-sm mb-3 text-gray-600">{{title}}</h2>
        <div class="text-lg"><slot></slot></div>
      </div>
      <Btn class="block w-auto" variant="light">{{ actionLabel }}</Btn>
    </div>
  </Card>
</template>

<script lang="ts">
import Btn from '@/components/Btn.vue';
import Card from '@/components/Card.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SettingsCard',
  components:{ 
    Btn, 
    Card,
  },
  props:{ 
    actionLabel: { 
      type: String, 
      default: 'Update'
    },
    title: { 
      type: String, 
      required: true
    }
  },
  setup() {
    
  },
})
</script>
