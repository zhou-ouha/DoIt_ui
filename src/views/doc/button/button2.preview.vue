<preview>基础按钮</preview>
<template>
  <div class="defulat">
    <Doitbutton>主要按钮</Doitbutton>
    <Doitbutton :status="status1">成功按钮</Doitbutton>
    <Doitbutton :status="status2">警告按钮</Doitbutton>
    <Doitbutton :status="status3">危险按钮</Doitbutton>
    <Doitbutton :status="status4">信息按钮</Doitbutton>
  </div>
  <div class="circle">
    <Doitbutton :iscircle="circle">圆角按钮</Doitbutton>
    <Doitbutton :status="status1" :iscircle="circle">成功按钮</Doitbutton>
    <Doitbutton :status="status2" :iscircle="circle">警告按钮</Doitbutton>
    <Doitbutton :status="status3" :iscircle="circle">危险按钮</Doitbutton>
    <Doitbutton :status="status4" :iscircle="circle">信息按钮</Doitbutton>
  </div>
</template>

<script lang="ts">
import {reactive,ref} from "vue"
import Doitbutton from "../../../lib/button.vue"
export default {
  components:{Doitbutton},
  setup(props) {
    const status = reactive({
      status1:"success",
      status2:"warning",
      status3:"error",
      status4:"info",
    });
    const circle = ref(true);
    return {
      ...status,
      circle
    }
  }
}
</script>

<style>

</style>