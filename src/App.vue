<template>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <router-view></router-view>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

export default{
  components:{
    HelloWorld
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
