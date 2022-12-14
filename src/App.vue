<script >
import axios from "axios"
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
      show: true,
    }
  },
  methods: {
    getApi() {
      axios
        .get(store.apiURL)
        .then(res => {
          store.arrayCards = res.data.results;
          this.show = false;

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
    <div id="caricamento" v-if="show">caricamento</div>

    <MainApp />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

#caricamento {
  font-size: 30px;
}
</style>
