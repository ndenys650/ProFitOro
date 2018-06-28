<template>
    <div>
        <header-component/>
        <content-component/>
        <footer-component/>
    </div>
</template>

<script>
import { HeaderComponent, FooterComponent, ContentComponent } from './main'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ContentComponent
  }
}
</script>

<style lang="sass" scoped>

</style>
