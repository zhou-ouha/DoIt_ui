<preview>基础用法</preview>
<template>
  <Input 
    v-model="inputVal1" 
    :placeholder="placeholderText1"
  />
  <Input :placeholder="placeholderText2" :disabled="ver"/>
</template>
<script lang="ts">
import {ref} from "vue"
import Input from "../../../lib/input.vue"
export default {
  components:{Input},
  setup(){
    let placeholderText1 = ref('默认情况');
    let placeholderText2 = ref('禁用状态');
    let ver = ref(true);
    let inputVal1 = ref("");
    return{
      placeholderText1,placeholderText2,ver,inputVal1
    }
  }
}
</script>
