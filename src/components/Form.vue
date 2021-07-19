<template>
  <form @submit.stop.prevent="onSubmit" ref="form" novalidate>
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Form',
  setup: (props, context) => {

    const form = ref<HTMLFormElement | null>(null);

    const onSubmit = () => { 
      if (!form.value){
        return;
      }

      form.value.classList.add('needs-validation');
      if (form.value.checkValidity()){
        context.emit('validSubmit');
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
