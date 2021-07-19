<template>
  <busy-screen :show="busy">
    <h1 class="text-center text-xl font-serif py-2">
      Reset Password
    </h1>
    <Alert v-if="error" :show-icon="false">
      {{ error }}
    </Alert>

    <div v-if="!code && !submittedPasswordReset">
      <p class="text-center my-3">
        Please enter your email address. An email will be sent to your inbox with farther instructions.
      </p>
      <Form @valid-submit="onSubmitRequestPasswordReset()">
        <FormInput
          l="Email"
          type="email"
          v-model="email"
          required
        />
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
          to="/sign-in"
          class="text-sm"
        >
          Back to Sign In
        </router-link>
      </div>
    </div>
    <div v-else-if="!code && submittedPasswordReset">
      <p class="text-center my-3">
        An email was sent with farther instructions. Please follow to reset your password.
      </p>
    </div>
    <div v-else-if="code && tokenCheckSuccess && !complete">
      <p class="text-center my-3">
        Please enter a new password <span v-if="emailToReset">for <strong>{{ emailToReset }}</strong></span>
      </p>
      <Form @valid-submit="onSubmitNewPassword()">
        <FormInput
          l="New Password"
          class="mt-4"
          type="password"
          minlength="5"
          v-model="password"
          required
        />
        <div class="mt-2">
          <Btn
            class="block"
            type="submit"
          >
            Submit
          </Btn>
          <div class="text-center mt-2">
            <router-link
              to="/sign-in"
              class="text-sm"
            >
              Back to Sign In
            </router-link>
          </div>
        </div>
      </Form>
    </div>
    <div v-else-if="code && !tokenCheckSuccess">
      <p class="text-center my-3">
        Sorry. This link is either expired or invalid. Please go back and try again.
      </p>
      <div class="mt-2">
        <Btn
          class="block"
          to="/reset-password"
        >
          Go Back
        </Btn>
      </div>
    </div>
    <div v-else-if="code && tokenCheckSuccess && complete">
      <p class="text-center my-3">
        Your password has been reset. Please go back and sign in with your new password.
      </p>
      <div class="mt-2">
        <Btn
          class="block"
          to="/sign-in"
        >
          Back To Sign In
        </Btn>
      </div>
    </div>
  </busy-screen>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import FormInput from '@/components/FormInput.vue';
import Btn from '@/components/Btn.vue';
import Alert from '@/components/Alert.vue';
import Form from '@/components/Form.vue';
import { useRoute, useRouter } from 'vue-router';
import firebase from "firebase/app";
import 'firebase/auth';
import BusyScreen from '../../components/BusyScreen.vue';

export default defineComponent({
  name: 'ResetPassword',
  components:{
    FormInput,
    Btn, 
    Alert,
    Form,
    BusyScreen,
  },
  setup() {
    const route = useRoute();
    const error = ref('');
    const tokenCheckSuccess = ref(true);
    const complete = ref(false);
    const submittedPasswordReset = ref(false);
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const code = computed(() => route.query.oobCode?.toString() || '');
    const emailToReset = computed(() => route.query.email?.toString() || '');
    const busy = ref(false);
    

    const onSubmitNewPassword = async () => { 
      busy.value = true;
      error.value = '';
      if (!code.value){ 
        return;
      }

      try{
        await firebase.auth().confirmPasswordReset(code.value.toString(), password.value);
        
      }catch(err){ 
        error.value = err;
      }
      complete.value = true;
      busy.value = false;
    }

    const onSubmitRequestPasswordReset = async() => { 
      error.value = '';
      busy.value = true;
      try{
        await firebase.auth().sendPasswordResetEmail(email.value);
        submittedPasswordReset.value = true;
      }catch(err){ 
        console.error(err);
        error.value = err.message;
      }
      busy.value = false;
    }

    onMounted(()=>{ 
      if (firebase.auth().currentUser){ 
        router.push('/member');
      }
      tokenCheckSuccess.value = !!code.value;
    });

    
    return { 
      error, 
      tokenCheckSuccess, 
      complete, 
      submittedPasswordReset,
      onSubmitNewPassword,
      onSubmitRequestPasswordReset, 
      email, 
      password, 
      busy,
      code,
      emailToReset,
    };
  },
})
</script>

<style lang="postcss" scoped>

</style>
