<preview>基础用法</preview>
<template>
  <Input 
    v-model="inputVal" 
    :placeholder="placeholderText1"
    :size="size1"
  />
  <Input 
    v-model="inputVal" 
    :placeholder="placeholderText2"
  />
  <Input 
    v-model="inputVal" 
    :placeholder="placeholderText3"
    :size="size2"
  />
</template>
<script lang="ts">
import {ref} from "vue"
import Input from "../../../lib/input.vue"
export default {
  components:{Input},
  setup(){
    let placeholderText1 = ref('大个输入框');
    let placeholderText2 = ref('正常输入框');
    let placeholderText3 = ref('小个输入框');
    let ver = ref(true);
    let inputVal = ref("");
    let size1 = ref("large");
    let size2 = ref("small");
    return{
      placeholderText1,placeholderText2,placeholderText3,ver,inputVal,size1,size2
    }
  }
}
</script>
