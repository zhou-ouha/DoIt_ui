<template>
  <div class="nav">
    <div class="left">
      <router-link to="/">
        <img class="img1" src="../assets/doit_01.png" alt="">
      </router-link>
    </div>
    <div class="right">
      <a href="https://github.com/zhou-ouha/DoIt_ui">Github</a>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav{
  height: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // background-image: linear-gradient(to bottom left,#ffa25c,#FF7F1E);
  >.left img{
    height: 6vh;
    vertical-align: middle;
  }
  >.right{
    padding-right: 100px;
    >a{
      line-height: 6vh;
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>
