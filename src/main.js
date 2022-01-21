import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './routes/index'
import store from "./store"
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import "dotenv/config"

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
};

initializeApp(firebaseConfig)

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  store.dispatch("fetchUser", user)
  console.log(user)
});


Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
