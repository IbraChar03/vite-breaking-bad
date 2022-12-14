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

        }
    }
}

</script>

<template>
    <div class="container">
        <div class=cont-cards>
            <Card :arrayCard="store.arrayCards" />
        </div>
    </div>

</template>

<style lang="scss" scoped>
.container {
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #BBE1FA;
    padding: 20px;

    .cont-cards {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
}
</style>
