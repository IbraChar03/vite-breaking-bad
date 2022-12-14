<script>
export default {
    props: {
        arrayCard: Array,
    },

}

</script>

<template>
    <div class="card" v-for="item in arrayCard">
        <img :src="item.img_url" alt="">
        <div class="text">
            <div class="name">{{ item.name }}</div>
            <div class="status">{{ item.status }}</div>
            <div class="species">{{ item.species }}</div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.card {
    width: calc(100% / 6 - 10px);
    margin: 5px;
    margin-bottom: 50px;
    background-color: #6B728E;
    border-radius: 5px;

    img {
        height: 180px;
        width: 100%;
        border-radius: 5px;
    }

    .text {
        text-align: center;

        .name,
        .status,
        .species {
            font-size: 17px;
            margin-bottom: 5px;
        }

        .name {
            color: white;
        }

        .status,
        .species {
            color: #C9D6DF;
        }
    }



}
</style>
