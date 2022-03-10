<preview>基础弹窗</preview>
<template>
  <Button @click="openDialog">点击打开弹窗</Button>
  <Dialog 
    :visible="visible"
    :close="close"
    :isCloseByMask="closeByMask"
    :showBtn="false"
  >
    <template v-slot:title>
      <div>
        提示
      </div>
    </template>
    <template v-slot:content>
      <div>
        默认使用底部按钮
      </div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import {ref} from "vue"
import Dialog from "../../../lib/dialog.vue"
import Button from "../../../lib/button.vue"
export default {
  components:{Dialog,Button},
  setup(){
    let visible = ref(false)
    let closeByMask = ref(true)
    const openDialog = () =>{
      visible.value = !visible.value
    }
    const close = ()=>{
      visible.value = false;
    }
    return {
      visible,
      openDialog,
      close,
      closeByMask,
    }
  }
}
</script>