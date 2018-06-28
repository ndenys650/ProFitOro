import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import firebase from 'firebase'
import { firebaseMutations } from 'vuexfire'

Vue.use(Vuex)

let config = {
  apiKey: 'AIzaSyBWAlQh5h_vDWBPqmPJs5P0xg1OmLYH-hM',
  databaseURL: 'hhttps://profitoro-366b2.firebaseio.com/',
  authDomain: 'profitoro-366b2.firebaseapp.com'
}
let firebaseApp = firebase.initializeApp(config)
let db = firebaseApp.database()
let configRef = db.ref('/configuration/test')
let statisticsRef = db.ref('/statistics/test')

export default new Vuex.Store({
  getters,
  mutations: {
    ...mutations,
    ...firebaseMutations
  },
  actions,
  state: {
    ...state,
    firebaseApp,
    configRef,
    statisticsRef
  }
})
