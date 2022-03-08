<template>
  <div class="start">
    <h2>介绍</h2>
    <hr>
    <p>DoIt UI是一款基于vue3.0和TypeScript的UI组件库</p>
    <p>组件库中将包含我认为好看的一些常见组件，同时也会有一些适用于我自己的小功能</p>
    <p>写的不好的地方，欢迎大家批评我！</p>
    <h2>特性</h2>
    <hr>
    <p>所有组件样式完全手写，没有第三方依赖，很轻，需求不多的场景完全可以使用这套组件</p>
    <p>组件目前包括输入框、按钮、弹窗、导航栏</p>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss" scoped>
.start{
  padding: 5vh 5vw;
  >h2{
    margin-bottom: 2vh;
  }
  >p{
    font-weight: bold;
    margin-left: 1vw;
    padding: 15px 0;
  }
}
</style>