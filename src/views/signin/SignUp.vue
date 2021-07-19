<template>
  <busy-screen :show="busy">
    <h1 class="text-center text-xl font-serif py-2">
      Sign Up
    </h1>
    <Alert
      v-if="error"
      :show-icon="false"
    >
      {{ error }}
    </Alert>
    <Form @valid-submit="onSubmit">
      <div class="grid grid-flow-col grid-cols-2 gap-4">
        <FormInput
          l="First Name"
          v-model="firstName"
          required
        />
        <FormInput
          l="Last Name"
          v-model="lastName"
          required
        />
      </div>
      
      <FormInput
        l="Email"
        type="email"
        v-model="email"
        required
      />
      <FormInput
        l="Password"
        v-model="password"
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
  </busy-screen>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import FormInput from '@/components/FormInput.vue';
import Btn from '@/components/Btn.vue';
import Alert from '@/components/Alert.vue';
import Form from '@/components/Form.vue';
import BusyScreen from '@/components/BusyScreen.vue';
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
    BusyScreen,
  },
  setup() {
    const error = ref('');
    
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const busy = ref(false);
    const router = useRouter();

    const onSubmit = async() => { 
      busy.value = true;
      try{
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
        if (!userCredential.user?.uid) {
          throw('Error signing up user');
        }
        const id = userCredential.user.uid;
        const docData = { 
          firstName: firstName.value, 
          lastName: lastName.value
        };

        firebase.firestore().collection('users').doc(id).set(docData);
        router.push('/member');
      }catch(err){ 
        error.value = err.message || err;
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
      firstName, 
      lastName, 
      email, 
      password, 
      busy
    };
  },
})
</script>

<style lang="postcss" scoped>

</style>
