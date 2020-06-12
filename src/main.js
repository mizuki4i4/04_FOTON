import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

// firebase初期設定
const config = {
  apiKey: "AIzaSyBq3NMCHeETnf0MWgyGPj_RvZ4sC20USXc",
  authDomain: "vue-sample-10437.firebaseapp.com",
  databaseURL: "https://vue-sample-10437.firebaseio.com",
  projectId: "vue-sample-10437",
  storageBucket: "vue-sample-10437.appspot.com",
  messagingSenderId: "926322378923",
  appId: "1:926322378923:web:d546ee22c836bf5d230fee"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
