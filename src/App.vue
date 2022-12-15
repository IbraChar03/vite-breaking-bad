<script >
import axios from "axios"
import { store } from "./store.js"
import HeaderApp from './components/HeaderApp.vue'
import MainApp from './components/MainApp.vue'
import Search from './components/Search.vue'
export default {
  components: {
    HeaderApp,
    MainApp,
    Search
  },
  data() {
    return {
      store,
      isLoading: true,
    }
  },
  methods: {
    getApi() {
      let api = store.apiURL
      if (store.status === "Alive" || store.status === "Dead" || store.status === "Unknown") {
        api += `?status=${store.status}`
      }
      axios
        .get(api)
        .then(res => {
          store.arrayCards = res.data.results;
          this.isLoading = false;

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
    <Search @searchFunction="getApi" />
    <MainApp />

    <div id="caricamento" v-if="isLoading">
      <font-awesome-icon icon="fa-solid fa-spinner" />
    </div>
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

#caricamento {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;

}
</style>
