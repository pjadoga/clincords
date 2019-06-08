import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from '@/firebase'
import colors from 'vuetify/es5/util/colors'
import { tns } from "tiny-slider"
const fb = require('./firebase.js')


Vue.config.productionTip = false

// handle page reloads
let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})