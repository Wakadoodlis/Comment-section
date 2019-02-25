import Vue from 'vue'
import App from './App.vue'
import VueStorageSync from "vue-storage-sync"
import Vuelidate from 'vuelidate'



Vue.use(VueStorageSync);
Vue.use(require('vue-moment'));
Vue.use(Vuelidate);

new Vue({
  el: '#app',
  render: h => h(App)
})
