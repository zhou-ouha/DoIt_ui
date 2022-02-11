<template>
  <div class="main">
    
    <img class="img2" src="../assets/do-it.png" alt="">
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style scoped lang="scss">
.main{
  background-color: #FF7F1E;
  >.img1{
    height: 8vh;
    position: absolute;
    left: 0;
    z-index: 99;
  }
  >.img1:hover{
    cursor: pointer;
  }
  >.img2{
    height: 65vh;
  }
}

</style>