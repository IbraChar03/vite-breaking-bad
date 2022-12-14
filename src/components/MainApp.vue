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

    <div class="cont-select">
        <select name="select" id="" class="select">
            <option value="" disabled selected hidden>Select Category</option>
            <option value="#">prova</option>
            <option value="#">prova</option>
            <option value="#">prova</option>
        </select>
    </div>
    <section class="main">
        <div class="container">

            <div class=cont-cards>
                <Card :arrayCard="store.arrayCards" />
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.cont-select {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .select {
        padding: 6px;
        font-size: 13px;
        border-radius: 5px;
    }
}

.container {
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
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
