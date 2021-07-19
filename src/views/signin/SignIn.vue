<template>
  <h1 class="text-center text-xl font-serif py-2">
    Sign In
  </h1>
  <Alert v-if="error">
    {{ error }}
  </Alert>
  <Form
    ref="form"
    @submit="onSubmit"
  >
    <FormInput
      l="Email"
      type="email"
      v-model="email"
      required
    />
    <FormInput
      l="Password"
      type="password"
      v-model="password"
      required
    >
      <template #right-label>
        <router-link to="/reset-password" tabindex="10">
          Forget?
        </router-link>
      </template>
    </FormInput>
    <div class="mt-2">
      <Btn
        class="block"
        type="submit"
      >
        Submit
      </Btn>
    </div>
  </Form>
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
import FormInput from '@/components/FormInput.vue';
import Btn from '@/components/Btn.vue';
import Form from '@/components/Form.vue';
import Alert from '@/components/Alert.vue';


export default defineComponent({
  name: 'SignIn',
  components:{
    FormInput,
    Btn, 
    Form,
    Alert,
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref('');

    const onSubmit = () => { 
      error.value = '';
    };

    return { 
      error, 
      onSubmit, 
      email, 
      password
    };
  },
})
</script>

<style lang="postcss" scoped>

</style>
