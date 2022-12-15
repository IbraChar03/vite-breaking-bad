<script>
import { store } from "../store.js"
export default {

    data() {
        return {
            store,

        }
    }
}

</script>

<template>
    <div class="cont-select">
        <select name="" id="" class="select" v-model="store.status" @change="$emit(`searchFunction`)">
            <option value="" disabled selected hidden>Select status</option>
            <option>Alive</option>
            <option>Dead</option>
            <option>Unknown</option>
        </select>
    </div>

</template>

<style lang="scss" scoped>
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
</style>
