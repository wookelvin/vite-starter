<template>
  <h1 class="text-center text-xl font-serif py-2">
    Sign Up
  </h1>
  <Alert v-if="error">
    {{ error }}
  </Alert>
  <Form @valid-submit="onSubmit">
    <div class="grid grid-flow-col grid-cols-2 gap-4">
      <FormInput
        l="First Name"
        required
      />
      <FormInput
        l="Last Name"
        required
      />
    </div>
    
    <FormInput
      l="Email"
      type="email"
      required
    />
    <FormInput
      l="Password"
      type="password"
      required
    />
    <div class="mt-2">
      <Btn
        class="block"
        type="submit"
      >
        Sign Up
      </Btn>
    </div>
  </Form>
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
import { defineComponent, onMounted, ref } from 'vue'
import FormInput from '@/components/FormInput.vue';
import Btn from '@/components/Btn.vue';
import Alert from '@/components/Alert.vue';
import Form from '@/components/Form.vue';
import { useRouter } from 'vue-router';
import firebase from "firebase/app";
import 'firebase/auth';

export default defineComponent({
  name: 'SignUp',
  components:{
    FormInput,
    Btn, 
    Alert,
    Form,
  },
  setup() {
    const error = ref('');
    const onSubmit = () =>{ 

    };
    const router = useRouter();

    onMounted(()=>{ 
        if (firebase.auth().currentUser){ 
          router.push('/member');
        }
    });

    return { 
      error, 
      onSubmit,
    };
  },
})
</script>

<style lang="postcss" scoped>

</style>
