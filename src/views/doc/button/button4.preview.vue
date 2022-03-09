<preview>基础按钮</preview>
<template>
  <Doitbutton :size="size1">小个按钮</Doitbutton>
  <Doitbutton :size="size2">正常按钮</Doitbutton>
  <Doitbutton :size="size3">大个按钮</Doitbutton>
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
    const sizes = reactive({
      size1:"small",
      size2:"normal",
      size3:"large"
    })
    const circle = ref(true);
    const disabled = ref(true);
    return {
      ...status,
      ...sizes,
      circle,
      disabled
    }
  }
}
</script>

<style>

</style>