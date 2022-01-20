import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import VueFire from 'vuefire'

import { initializeApp } from 'firebase/app'
import 'firebase/firestore'
// import firebase from 'firebase/app'
// import "firebase/auth"
// import "firebase/database"
// Vue.use(VueFire)

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv6t71W1vRozr7Sfo5x5vbu5Iu5coWG2A",
  authDomain: "vue-monitoring-people.firebaseapp.com",
  projectId: "vue-monitoring-people",
  storageBucket: "vue-monitoring-people.appspot.com",
  messagingSenderId: "567438136313",
  appId: "1:567438136313:web:65dc7015cb29c1e6832328",
  measurementId: "G-2JJQPEQ5W5"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig)

console.log(db)

// firebase.auth().onAuthStateChanged(() => console.log('Included in the application'))


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
