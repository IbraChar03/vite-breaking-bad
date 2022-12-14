<script>
import { store } from "../store.js"
import Card from './Card.vue'
export default {
    components: {
        Card,
    },
    data() {
        return {
            store,
            msg: "ciao"
        }
    }
}

</script>

<template>
    <div class="container">

        <Card :arrayCard="store.arrayCards" />
    </div>

</template>

<style lang="scss" scoped>

</style>
