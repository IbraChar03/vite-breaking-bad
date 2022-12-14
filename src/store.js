import { reactive } from "vue"
export const store = reactive({
    arrayCards: [],
    apiURL: "https://rickandmortyapi.com/api/character",
})