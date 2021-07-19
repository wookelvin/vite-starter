import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.css';
import { router } from './router';
import FirebaseService from './services/Firebase.service';

(async () => { 
  FirebaseService.init();
  await FirebaseService.waitForUserCheck();

  createApp(App)
    .use(router)
    .mount('#app')
})();
