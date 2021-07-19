<template>
  <label class="mt-4 block relative form-group" :class="error?'form-group-error':''">
    <div class="flex justify-between items-center">
      <div
        v-if="l"
        class="text-xs text-gray-700 bg-white px-2 absolute -top-2 left-1 form-label"
      >{{ l }}</div>
      
      <div class="text-xs text-gray-700 bg-white px-2 absolute -top-2 right-1">
        <slot name="right-label" />
      </div>
      
    </div>
    <input
      :type="type"
      class="block border p-3 bg-white w-full rounded rounded-sm border-gray-300"
      :required="required? 'required' : undefined"
      ref="input"
      @input="getErrorMessage"
      v-model="value"
      :minlength="minlength?minlength:undefined"
    >
    <span class="text-xs text-red-600 form-error">{{ error }}</span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
export default defineComponent({
  name: 'FormInput',
  props:{
    l:{ 
      type: String, 
      default: '',
    }, 
    type:{ 
      type: String,
      default: 'text'
    },
    required: { 
      type: Boolean, 
      default: false,
    }, 
    minlength: { 
      type: String,
      default: '', 
    }, 
    modelValue: { 
      type: String, 
      default: ''
    }
  },
  emits:['update:modelValue'],
  setup: (props, { emit }) => {
    const input = ref<HTMLInputElement|null>(null);
    const value = ref('');
    const error = ref('');

    const getErrorMessage = () => { 
      error.value = input.value?.validationMessage || '';
    }

    watch(() => props.modelValue, () => { value.value = props.modelValue });

    watch(value, (currentValue)=>{ 
      emit('update:modelValue', currentValue);
    })

    onMounted(() => { 
      getErrorMessage();
    });
    
    return { 
      getErrorMessage,
      value,
      input,
      error
    }
  }
})
</script>

<style lang="postcss" scoped>

</style>
