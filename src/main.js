import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import firebase from '@/firebase'
import colors from 'vuetify/es5/util/colors'
// import { tns } from "./node_modules/tiny-slider/src/tiny-slider"
import { tns } from "tiny-slider"


// Vue.use(Vuetify, {
//   theme: {
//     primary: "#7986CB"
//   }
  
// })

// We create new instance of our router
// const router = new VueRouter({
//   //we could register our routes here or keep them seperate
//     route:routes,
//     mode:'history'
// })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
