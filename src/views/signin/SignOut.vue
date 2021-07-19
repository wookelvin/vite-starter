<template>
  <h1 class="text-center text-xl font-serif py-2">
    Signing Out
    <BusyIcon class="mt-3"/>
  </h1>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import FormInput from '@/components/FormInput.vue';
import Btn from '@/components/Btn.vue';
import Form from '@/components/Form.vue';
import Alert from '@/components/Alert.vue';
import BusyIcon from '@/components/BusyIcon.vue';
import firebase from "firebase/app";
import 'firebase/auth';
import { useRouter } from 'vue-router';
import FirebaseService from '../../services/Firebase.service';

export default defineComponent({
  name: 'SignOut',
  components:{
    FormInput,
    Btn, 
    Form,
    Alert,
    BusyIcon,
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref('');
    const router = useRouter();

    onMounted(()=>{ 
      setTimeout(async () => { 
        if (FirebaseService.user){
          await firebase.auth().signOut();
        }
        router.push('/sign-in');
      }, 1000);
    });

    return { 
      error, 
      email, 
      password
    };
  },
})
</script>

<style lang="postcss" scoped>

</style>
