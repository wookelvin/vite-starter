<template>
  <h1 class="text-center text-xl font-serif py-2">
    Sign Up
  </h1>
  <Alert v-if="error">
    {{ error }}
  </Alert>
  <div class="grid grid-flow-col grid-cols-2 gap-4">
    <FormInputText l="First Name" />
    <FormInputText l="Last Name" />
  </div>
  
  <FormInputText l="Email" />
  <FormInputPassword l="Password" />
  <div class="mt-2">
    <Btn class="block">
      Sign Up
    </Btn>
  </div>
  <div class="text-center mt-2">
    <router-link
      to="/sign-in"
      class="text-sm"
    >
      Back To Sign In
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import FormInputText from '@/components/FormInputText.vue';
import FormInputPassword from '@/components/FormInputPassword.vue';
import Btn from '@/components/Btn.vue';
import Alert from '@/components/Alert.vue';

export default defineComponent({
  name: 'SignUp',
  components:{
    FormInputText,
    FormInputPassword,
    Btn, 
    Alert,
  },
  setup() {
    const error = ref('');
    return { error };
  },
})
</script>

<style lang="postcss" scoped>

</style>
