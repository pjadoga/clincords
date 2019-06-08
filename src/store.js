import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('./firebase.js')


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {}
  },
  mutations: {
    setCurrentUser (state, payload) {
      state.currentUser = payload
    },
    setUserProfile (state, payload) {
      state.userProfile = payload
    }
  },
  actions: {
    clearData({commit}){
      commit('setCurrentUser', null),
      commit('userProfile', {})
    },
    fetchUserProfile({ commit, state }) {
      fb.usersCollection.doc(state.currentUser.uid).get().then(res => {
        commit('setUserProfile', res.data())
      }).catch(err => {
        console.log(err)
      })
    }
  }
})
