<template>
  <div class="inputBox">
    <h2>input输入框</h2>
    <hr>
    <Demo :component="inputDemo1"/>
  </div>
</template>

<script lang="ts">
import inputDemo1 from "./input1.preview.vue"
import Demo from "../../../components/Demo.vue"
  export default{
    components:{Demo},
    setup(){
      return {
        inputDemo1 
      }
    }
  }
</script>

<style scoped lang="scss">
.inputBox{
  padding: 5vh 2vw;
  >h2{
    margin-bottom: 2vh;
  }
}
</style>