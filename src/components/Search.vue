<script>
import { store } from "../store.js"
export default {

    data() {
        return {
            store,

        }
    },
    methods: {
        reset() {
            store.status = "Select status"
            this.$emit(`searchFunction`)
        }
    }
}

</script>

<template>
    <div class="cont-select">
        <select name="" id="" class="select" v-model="store.status" @change="$emit(`searchFunction`)">
            <option value="" disabled selected hidden>Select status</option>
            <option value="Select status" disabled selected hidden>Select status</option>
            <option>Alive</option>
            <option>Dead</option>
            <option>Unknown</option>
        </select>
        <button @click="reset">RESET</button>
    </div>

</template>

<style lang="scss" scoped>
.cont-select {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .select {
        padding: 8px;
        font-size: 13px;
        border-radius: 5px;
    }

    button {
        margin-left: 20px;
        padding: 8px;
        font-size: 13px;
        border-radius: 5px;
        background-color: #009EFF;
        color: white;
    }
}
</style>
