// import Vuefire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
// import 'firebase/auth'
// import 'firebase/database'
import store from '@/store'

// Vue.use(axios)

// Vue.use(Vuefire)
// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyCAheZbp8Yq-DJ54sb0U-o2jxWsd1hLzQ8",
//   authDomain: "clincords-users.firebaseapp.com",
//   databaseURL: "https://clincords-users.firebaseio.com",
//   projectId: "clincords-users",
//   storageBucket: "clincords-users.appspot.com",
//   messagingSenderId: "343456929757"
// }
const firebaseConfig = {
  apiKey: "AIzaSyCAheZbp8Yq-DJ54sb0U-o2jxWsd1hLzQ8",
  authDomain: "clincords-users.firebaseapp.com",
  databaseURL: "https://clincords-users.firebaseio.com",
  projectId: "clincords-users",
  storageBucket: "clincords-users.appspot.com",
  messagingSenderId: "343456929757",
  appId: "1:343456929757:web:36b58fce16bf71ec"
};
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export default firebase
// global.firebase = firebase
//Create the sign up check


// firebase.signUp = async (email, password) => {
//   try{
//     await firebase.auth().createUserWithEmailAndPassword(email, password)
//     store.commit('setCurrentUser', firebase.auth().currentUser)
//     return true
//   } catch (error) {
//     return error
//   }
// }