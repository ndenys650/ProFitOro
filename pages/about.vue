<template>
  <div>
    <header-component></header-component>
    <div class="container min-full-height pb-5">
      <p class="lead">
        My ProFitOro application is a time management application that combines the Pomodoro technique with office workouts.
      </p>
      <p class="lead">
        <nuxt-link to="login">Click here to login </nuxt-link> or just <nuxt-link to="pomodoro">start using ProFitOro </nuxt-link>without registration.
      </p>
      <p class="lead">
        Every time your Pomodoro working interval ends, you will be presented with a small workout that you have to perform during the Pomodoro resting period.
      </p>
      <h4 class="title">There are some advantages to become a <nuxt-link to="login">registered user</nuxt-link>:</h4>
      <p>
        As a registered user you can <nuxt-link to="settings">configure</nuxt-link> your Pomodoro timing settings.
      </p>
      <p>
        You can also <nuxt-link to="workouts">manage</nuxt-link> workouts, choosing your favourite ones, rating them and even creating your own workouts that will be displayed to everybody!
      </p>
      <p>
        You can also <nuxt-link to="statistics">check your statistics</nuxt-link> along the time you use ProFitOro!
      </p>
      <h4 class="title">Book</h4>
      <p>
        This application has been developed from a walkthrough of the book <a href="https://www.packtpub.com/web-development/web-development-bootstrap-and-vuejs">"Web development using Vue.js, Bootstrap and Firebase"</a>.
      </p>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import { HeaderComponent, FooterComponent } from '~/components/common'
  export default {
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>
<style scoped lang="scss">
  @import "../assets/styles/main";
</style>