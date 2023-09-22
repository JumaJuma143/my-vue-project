<template>
  <div id="app">
    <HeaderInfo />
    <router-view />
    <FooterInfo />
  </div>
</template>

<script>
import HeaderInfo from './components/headerPro.vue'
import FooterInfo from './components/footerPro.vue'

export default {
  components: {
    HeaderInfo,
    FooterInfo
  }
}
</script>

<style>
body {
  margin: 0;
}
  #app {
    max-width: 1450px;
    margin: 0 auto;
  }
</style>