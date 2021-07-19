<template>
  <form
    @submit.stop.prevent="onSubmit"
    ref="form"
    novalidate
  >
    <slot />
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Form',
  emits:['validSubmit'],
  setup: (props, { emit }) => {

    const form = ref<HTMLFormElement | null>(null);

    const onSubmit = () => { 
      if (!form.value){
        return;
      }

      form.value.classList.add('needs-validation');
      if (form.value.checkValidity()){
        emit('validSubmit');
      }
    };

    const reset = () => { 
      form.value?.reset();
      form.value?.classList.remove('needs-validation');
    };

    return { 
      form, 
      onSubmit,
      reset,
    };

  }
})
</script>

<style scoped>
</style>
