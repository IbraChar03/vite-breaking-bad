<script>
export default {
  data() {
    return {
    }
  }
}

</script>

<template>
  <div class="container-header">
    <img src="/images/rickandmorty.png" alt="">
  </div>
</template>

<style lang="scss" scoped>
.container-header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 70px;


  h1 {
    color: #393E46;
    font-size: 30px;
    font-weight: bold;
  }

  img {
    width: 700px;
    height: 300px;
  }
}
</style>
