<template>
  <busy-screen :show="busy">
    <h1 class="text-center text-xl font-serif py-2">
      Sign In
    </h1>
    <Alert v-if="error" :showIcon="false">
      {{ error }}
    </Alert>
    <Form
      ref="form"
      @valid-submit="onSubmit"
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
  </busy-screen>
</template>
<script lang="ts">
import { defineComponent, nextTick, onMounted, ref } from 'vue'
import FormInput from '@/components/FormInput.vue';
import Btn from '@/components/Btn.vue';
import Form from '@/components/Form.vue';
import Alert from '@/components/Alert.vue';
import firebase from "firebase/app";
import 'firebase/auth';
import { useRouter } from 'vue-router';
import BusyScreen from '../../components/BusyScreen.vue';

export default defineComponent({
  name: 'SignIn',
  components:{
    FormInput,
    Btn, 
    Form,
    Alert,
    BusyScreen,
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref('');
    const busy = ref(false);
    const router = useRouter();

    const onSubmit = async () => { 
      console.log('submitted');
      error.value = '';      
      busy.value = true;

      try{
        await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        router.push('/member')
      }catch(err){ 
        error.value = err.message;
        console.error(err);
      }
      busy.value = false;
    };

    onMounted(()=>{ 
        if (firebase.auth().currentUser){ 
          router.push('/member');
        }
    });

    return { 
      error, 
      onSubmit, 
      email, 
      password, 
      busy,
    };
  },
})
</script>

<style lang="postcss" scoped>

</style>
