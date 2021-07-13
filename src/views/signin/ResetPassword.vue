<template>
  <h1 class="text-center text-xl font-serif py-2">
    Reset Password
  </h1>
  <Alert v-if="error">
    {{ error }}
  </Alert>

  <div v-if="!token && !submittedPasswordReset">
    <p class="text-center my-3">
      Please enter your email address. An email will be sent to your inbox with farther instructions.
    </p>
    <FormInputText l="Email" />
    <div class="mt-2">
      <Btn
        class="block"
        @click.stop.prevent="onSubmitRequestPasswordReset()"
      >
        Submit
      </Btn>
    </div>

    <div class="text-center mt-2">
      <router-link
        to="/sign-in"
        class="text-sm"
      >
        Back to Sign In
      </router-link>
    </div>
  </div>
  <div v-else-if="!token && submittedPasswordReset">
    <p class="text-center my-3">
      An email was sent with farther instructions. Please follow to reset your password.
    </p>
  </div>
  <div v-else-if="token && tokenCheckSuccess && !complete">
    <p class="text-center my-3">
      Please enter a new password to set for your account
    </p>
    <FormInputPassword
      l="New Password"
      class="mt-4"
    />
    <div class="mt-2">
      <Btn
        class="block"
        @click.stop.prevent="onSubmitNewPassword()"
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
  </div>
  <div v-else-if="token && !tokenCheckSuccess">
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
  <div v-else-if="token && tokenCheckSuccess && complete">
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
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import FormInputText from '@/components/FormInputText.vue';
import FormInputPassword from '@/components/FormInputPassword.vue';
import Btn from '@/components/Btn.vue';
import Alert from '@/components/Alert.vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'ResetPassword',
  components:{
    FormInputText,
    FormInputPassword,
    Btn, 
    Alert,
  },
  setup() {
    const route = useRoute();
    const error = ref('');
    const token = computed(() => route.query.t);
    const tokenCheckSuccess = ref(true);
    const complete = ref(false);
    const submittedPasswordReset = ref(false);

    tokenCheckSuccess.value = token.value === '1';

    const onSubmitNewPassword = () => { 
      complete.value = true;
    }

    const onSubmitRequestPasswordReset = () => { 
      submittedPasswordReset.value = true;
      console.log('submitted');
    }
    
    return { 
      error, 
      tokenCheckSuccess, 
      token, 
      complete, 
      submittedPasswordReset,
      onSubmitNewPassword,
      onSubmitRequestPasswordReset
    };
  },
})
</script>

<style lang="postcss" scoped>

</style>
