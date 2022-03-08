<preview>文本域</preview>
<template>
  <Input 
    v-model="inputVal" 
    :placeholder="placeholderText1" 
    :sizeCols="40"
    :sizeRows="4"
  />
  <Input 
    v-model="inputVal" 
    :placeholder="placeholderText2" 
    :disabled="disabled"
    :sizeCols="50"
    :sizeRows="5"
  />
</template>
<script lang="ts">
import {ref} from "vue"
import Input from "../../../lib/textArea.vue"
export default {
  components:{Input},
  setup(){
    let placeholderText1 = ref('可以输入多行文本(大小40*4)');
    let placeholderText2 = ref('禁用状态(大小50*5)');
    let inputVal = ref("");
    let disabled = ref(true);
    return{
      placeholderText1,placeholderText2,inputVal,disabled
    }
  }
}
</script>
