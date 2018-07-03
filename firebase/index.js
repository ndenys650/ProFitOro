// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyBWAlQh5h_vDWBPqmPJs5P0xg1OmLYH-hM',
  databaseURL: 'hhttps://profitoro-366b2.firebaseio.com/',
  authDomain: 'profitoro-366b2.firebaseapp.com',
  storageBucket: 'gs://profitoro-366b2.appspot.com'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp