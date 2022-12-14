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
    getApi() {
      axios
        .get(store.apiURL)
        .then(res => {
          store.arrayCards = res.data;
        })
        .catch(err => {
          console.log("errori", err)
        });

    }

  },
  mounted() {
    this.getApi()
  }


}
</script>

<template>
  <header>
    <HeaderApp />
  </header>

  <main>
    <MainApp />
  </main>
</template>

<style lang="scss" scoped>
@use "./styles/general.scss" as *;

main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
