<template>
  <div id="app">
    <landing-page v-if="!user"></landing-page>
    <main-content v-if="user"></main-content>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage'
import MainContent from './components/MainContent'
import {mapActions, mapState} from 'vuex'

export default {
  name: 'App',
  components: {
    LandingPage,
    MainContent
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['bindAuth'])
  },
  created () {
    this.bindAuth()
  }
}
</script>

<style>

</style>
