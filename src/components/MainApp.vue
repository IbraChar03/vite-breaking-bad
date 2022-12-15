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
