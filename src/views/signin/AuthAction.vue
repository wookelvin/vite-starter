<template>
  <Alert
    v-if="error"
    :show-icon="false"
  >
    {{ error }}
  </Alert>
</template>

<script lang="ts">
import { ref, defineComponent, computed, onMounted } from 'vue';
import firebase from "firebase/app";
import 'firebase/auth';
import { useRoute, useRouter } from 'vue-router';
import Alert from '../../components/Alert.vue';

export default defineComponent({
  components: { Alert },
  name: 'AuthAction',
  setup: () => { 
    const error = ref('');
    const route = useRoute();
    const router = useRouter();
    const oobCode = computed(() => route.query.oobCode?.toString() || '');
    
    onMounted(async() => { 
      if (!oobCode.value){
        return;
      }
      try{ 
        const response = await firebase.auth().checkActionCode(oobCode.value);
        console.log('response', response);
      
        if (response?.operation === "PASSWORD_RESET") {
          router.push({
            path: "/reset-password",
            query: { oobCode: oobCode.value, email: response?.data.email },
          });
        }
      }catch(err){ 
        error.value = err.message;
        console.error(err);
      }
    });

    return { 
      error
    }
  }
})
</script>

<style scoped>
</style>

