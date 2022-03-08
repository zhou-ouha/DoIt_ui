<preview>基础用法</preview>
<template>
  <Input 
    v-model="inputVal" 
    :placeholder="placeholderText1"
  />
  <Input 
    v-model="inputVal" 
    :placeholder="placeholderText2"
    :status="status1"
  />
  <Input 
    v-model="inputVal" 
    :placeholder="placeholderText3"
    :status="status2"
  />
  <Input 
    v-model="inputVal" 
    :placeholder="placeholderText4"
    :size="size2"
    :status="status3"
  />
</template>
<script lang="ts">
import {ref} from "vue"
import Input from "../../../lib/input.vue"
export default {
  components:{Input},
  setup(){
    let placeholderText1 = ref('默认情况');
    let placeholderText2 = ref('输入正确');
    let placeholderText3 = ref('格式有误');
    let placeholderText4 = ref('输入错误');
    let ver = ref(true);
    let inputVal = ref("");
    let status1 = ref("success");
    let status2 = ref("warning");
    let status3 = ref("error");
    return{
      placeholderText1,placeholderText2,placeholderText3,placeholderText4,ver,inputVal,status1,status2,status3
    }
  }
}
</script>