<script >
import axios from 'axios'
import { store } from "./store.js"
import HeaderApp from './components/HeaderApp.vue'
import MainApp from './components/MainApp.vue'
export default {
  components: {
    HeaderApp,
    MainApp
  },
  data() {
    return {
      store,
    }
  },
  methods: {


  },


}
</script>

<template>
  <HeaderApp />
  <main>
    <MainApp />
  </main>
</template>

<style lang="scss" scoped>
@use "./styles/general.scss" as *;
</style>
