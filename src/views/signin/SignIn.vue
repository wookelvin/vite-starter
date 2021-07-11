<template>
  <h1 class="text-center text-xl font-serif py-2">Sign In</h1>
  <Alert>
    Wrong Email/Password
  </Alert>
  <FormInputText l="Email" />
  <FormInputPassword l="Password" />
  <div class="mt-2">
    <Btn class="block">Submit</Btn>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import FormInputText from '@/components/FormInputText.vue';
import FormInputPassword from '@/components/FormInputPassword.vue';
import Btn from '@/components/Btn.vue';
import Alert from '@/components/Alert.vue';

export default defineComponent({
  name: 'SignIn',
  components:{
    FormInputText,
    FormInputPassword,
    Btn, 
    Alert,
  },
  setup() {
    
  },
})
</script>

<style lang="postcss" scoped>

</style>
