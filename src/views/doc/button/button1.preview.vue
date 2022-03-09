<preview>基础用法</preview>
<template>
  <Doitbutton>默认按钮</Doitbutton>
  <Doitbutton :buttonType="buttonType1">重置按钮</Doitbutton>
  <Doitbutton :buttonType="buttonType2">提交按钮</Doitbutton>
</template>

<script lang="ts">
import {ref} from "vue"
import Doitbutton from "../../../lib/button.vue"
export default {
  components:{Doitbutton},
  setup(props) {
    const buttonType1 = ref("reset")
    const buttonType2 = ref("submit")
    return {
      buttonType1,buttonType2
    }
  }
}
</script>

<style>

</style>