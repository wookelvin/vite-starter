<template>
  <h1 class="text-center text-xl font-serif py-2">
    Sign In
  </h1>
  <Alert v-if="error">
    {{ error }}
  </Alert>
  <FormInputText l="Email" />
  <FormInputPassword l="Password">
    <template #right-label>
      <router-link to="/reset-password">
        Forget?
      </router-link>
    </template>
  </FormInputPassword>
  <div class="mt-2">
    <Btn class="block">
      Submit
    </Btn>
  </div>
  <div class="text-center mt-2">
    <router-link
      to="/sign-up"
      class="text-sm"
    >
      Sign Up
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
  name: 'SignIn',
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
