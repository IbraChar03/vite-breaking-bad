<script>
import { store } from "../store.js"
import Cards from './Cards.vue'
export default {
    components: {
        Cards,
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
    <div class="characters">
        <div class="number">

            Found {{ store.arrayCards.length }} Characters
        </div>
    </div>
    <section class="main">
        <div class="container">

            <div class=cont-cards>
                <Cards :arrayCard="store.arrayCards" />
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.characters {
    width: 100%;
    // height: 60px;
    display: flex;
    justify-content: center;
    margin-top: 30px;


    .number {
        padding: 20px;
        width: 65%;
        height: 100%;
        display: flex;
        align-items: center;
        background-color: #A6E3E9;
        color: white;
        font-weight: bold;
        font-size: 18px;
        padding-left: 15px;
    }
}


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
    width: 65%;
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
