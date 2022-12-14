<script>
export default {
  data() {
    return {
      msg: "FINAL SPACE"
    }
  }
}

</script>

<template>
  <div class="container-header">
    <!-- <h1>{{ msg }}</h1> -->
    <img src="/images/finalspace.png" alt="">
  </div>
</template>

<style lang="scss" scoped>
.container-header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;


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
